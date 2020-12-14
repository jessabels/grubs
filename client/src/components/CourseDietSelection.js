import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button, Slide } from "@material-ui/core";
import {
  createRecipeTip,
  getRecipeLikes,
  getRecipes,
  getRecipeTips,
  getTipLikes,
  getUsers,
  saveRecipe,
  getSavedRecipes,
} from "./store/actions/entities";
import { currentRecipeId } from "./store/actions/session";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "./CourseDietSelection.css";
import RecipeDetailModal from "./RecipeDetailModal";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling as Vegan,
  faBacon as Breakfast,
  faFish as Pescatarian,
  faCarrot as Vegetarian,
  faHamburger as Lunch,
  faDrumstickBite as Omnivore,
  faWineGlass as Dinner,
} from "@fortawesome/free-solid-svg-icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100px",
    width: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "1.2em",
    border: "1px solid #cac3c3",
    textTransform: "uppercase",
    cursor: "pointer",
    "&:hover": {
      background: "#795",
      color: "white",
    },
  },

  button: {
    padding: "15px",
    background: "#795",
    color: "white",
    "&:hover": {
      background: "#5e7944",
    },
  },
  secondaryButton: {
    margin: "10px 0",
    background: "white",
    "&:hover": {
      background: "rgb(220 177 78 / 41%)",
    },
  },
  carouselItem: {
    cursor: "pointer",
  },
}));

const CourseSelection = () => {
  const classes = useStyles();

  const recipes = useSelector((state) => state.entities.recipes);
  const recipeTips = useSelector((state) => state.entities.recipeTips);
  const selectedRecipeId = useSelector((state) =>
    recipes ? state.sessions.currentRecipeId : null
  );

  const currentRecipe = recipes ? recipes[selectedRecipeId] : null;
  const users = useSelector((state) => state.entities.users);
  const dispatch = useDispatch();

  const [selectedCourse, setSelectedCourse] = useState("");
  const [dietId, setDietId] = useState("");
  const [errors, setErrors] = useState("");
  const [hiddenOptions, setHiddenOptions] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState("");
  const courses = ["Breakfast", "Lunch", "Dinner"];
  const diets = ["Omnivore", "Vegan", "Vegetarian", "Pescatarian"];

  const handleSave = () => {
    dispatch(saveRecipe(selectedRecipeId));
  };
  const handleClose = () => {
    setOpen(false);
  };

  const chooseCourse = (selectedCourse) => {
    setSelectedCourse(selectedCourse);
  };

  const chooseDiet = (selectedDiet) => {
    setDietId(selectedDiet);
  };

  const handleSubmitChoices = () => {
    if (selectedCourse && dietId) {
      setErrors("");
      dispatch(getRecipes(selectedCourse, dietId));
      dispatch(getRecipeLikes());
      dispatch(getRecipeTips());
      dispatch(getTipLikes());
      dispatch(getUsers());
      setHiddenOptions(true);
    } else {
      setErrors("Please choose both a course & a diet.");
    }
  };

  const openRecipePage = (recipeId) => {
    setOpen(true);
    dispatch(currentRecipeId(recipeId));
  };

  const handleChangeSelection = () => {
    setHiddenOptions(false);
  };

  const handleTipSubmit = (e) => {
    e.preventDefault();
    const currentRecipeCourse = currentRecipe.course;
    const currentRecipeDietId = currentRecipe.dietId;
    dispatch(
      createRecipeTip(
        text,
        currentRecipeId,
        currentRecipeCourse,
        currentRecipeDietId
      )
    );
    setText("");
  };

  return !hiddenOptions ? (
    <>
      <div className="homepage-wrapper">
        <div className="food-selection-container">
          <div className="courses-div">
            <div style={{ color: "red", textAlign: "center" }}>{errors}</div>
            <h1 className="title">Choose a course </h1>
            <Grid container spacing={1}>
              <>
                {courses.map((course) => (
                  <Grid key={course} item xs>
                    <Paper
                      className={classes.root}
                      style={
                        selectedCourse === course
                          ? { background: "#795", color: "white" }
                          : null
                      }
                      onClick={() => chooseCourse(course)}
                    >
                      <span className="selection-type">{course}</span>
                      <div className="food-icons">
                        {course === "Breakfast" ? (
                          <FontAwesomeIcon icon={Breakfast} />
                        ) : course === "Lunch" ? (
                          <FontAwesomeIcon icon={Lunch} />
                        ) : (
                          <FontAwesomeIcon icon={Dinner} />
                        )}
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </>
            </Grid>
          </div>
          <div className="diets-div">
            <h1 className="title">Choose a diet</h1>
            <Grid container spacing={3}>
              {diets.map((diet, i) => (
                <Grid key={diet} item xs>
                  <Paper
                    className={classes.root}
                    style={
                      dietId === i + 1
                        ? { background: "#795", color: "white" }
                        : null
                    }
                    onClick={() => chooseDiet(i + 1)}
                  >
                    <span className="selection-type">{diet}</span>
                    <div className="food-icons">
                      {diet === "Omnivore" ? (
                        <FontAwesomeIcon icon={Omnivore} />
                      ) : diet === "Vegan" ? (
                        <FontAwesomeIcon icon={Vegan} />
                      ) : diet === "Vegetarian" ? (
                        <FontAwesomeIcon icon={Vegetarian} />
                      ) : (
                        <FontAwesomeIcon icon={Pescatarian} />
                      )}
                    </div>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <div className="choose-btn">
          <Button className={classes.button} onClick={handleSubmitChoices}>
            Find recipes!
          </Button>
        </div>
      </div>
    </>
  ) : (
    <>
      <Button
        className={classes.secondaryButton}
        onClick={handleChangeSelection}
        startIcon={<ArrowBackIcon />}
      >
        Change Selection
      </Button>
      <div style={{ width: "70%", display: "block", margin: "0 auto" }}>
        <Carousel>
          {recipes
            ? Object.values(recipes).map((recipe) => (
                <Carousel.Item
                  key={recipe.recipeId}
                  onClick={() => openRecipePage(recipe.recipeId)}
                  className={classes.carouselItem}
                >
                  <img
                    alt={recipe.title}
                    style={{ height: "650px" }}
                    className="d-block w-100"
                    key={recipe.title}
                    src={recipe.imageUrl}
                  />
                  <Carousel.Caption>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            : "No recipes"}
        </Carousel>
        <RecipeDetailModal
          open={open}
          handleClose={handleClose}
          Transition={Transition}
          currentRecipe={currentRecipe}
          handleSave={handleSave}
          recipeTips={recipeTips}
          users={users}
          handleTipSubmit={handleTipSubmit}
          text={text}
          setText={setText}
        />
      </div>
    </>
  );
};

export default CourseSelection;
