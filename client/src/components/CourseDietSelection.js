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
} from "./store/actions/entities";
import { currentRecipeId } from "./store/actions/session";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "./CourseDietSelection.css";
import RecipeDetailModal from "./RecipeDetailModal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90px",
    width: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
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

  const [course, setCourse] = useState("");
  const [dietId, setDietId] = useState("");
  const [errors, setErrors] = useState("");
  const [hiddenOptions, setHiddenOptions] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState("");

  const handleSave = () => {
    dispatch(saveRecipe(selectedRecipeId));
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const chooseCourse = (selectedCourse) => {
    setCourse(selectedCourse);
  };

  const chooseDiet = (selectedDiet) => {
    setDietId(selectedDiet);
  };

  const handleSubmitChoices = () => {
    if (course && dietId) {
      setErrors("");
      dispatch(getRecipes(course, dietId));
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
    const currentRecipeCourse = currentRecipe.course;
    const currentRecipeDietId = currentRecipe.dietId;
    e.preventDefault();
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
        <div>{errors}</div>
        <div className="food-selection-container">
          <div className="courses-div">
            <h1 className="title">Choose a course </h1>
            <Grid container spacing={1}>
              <Grid item xs>
                {/* <img
              src="https://grubs.s3.amazonaws.com/icons/breakfast.png"
              onClick={() => chooseCourse("Breakfast")}
            /> */}
                <Paper
                  className={classes.root}
                  onClick={() => chooseCourse("Breakfast")}
                >
                  <span className="selection-type">Breakfast</span>
                </Paper>
              </Grid>
              <Grid item xs>
                {/* <img
              src="https://grubs.s3.amazonaws.com/icons/lunch.png"
              onClick={() => chooseCourse("Lunch")}
            /> */}{" "}
                <Paper
                  className={classes.root}
                  onClick={() => chooseCourse("Lunch")}
                >
                  <span className="selection-type">Lunch</span>
                </Paper>
              </Grid>
              <Grid item xs>
                {/* <img
              src="https://grubs.s3.amazonaws.com/icons/dinner.png"
              onClick={() => chooseCourse("Dinner")}
            /> */}
                <Paper
                  className={classes.root}
                  onClick={() => chooseCourse("Dinner")}
                >
                  <span className="selection-type">Dinner</span>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div className="diets-div">
            <h1 className="title">Choose a diet</h1>
            <Grid container spacing={3}>
              <Grid item xs>
                {/* <img
              src="https://grubs.s3.amazonaws.com/icons/omnivore.png"
              onClick={() => chooseDiet(1)}
            /> */}{" "}
                <Paper className={classes.root} onClick={() => chooseDiet(1)}>
                  <span className="selection-type">Omnivore</span>
                </Paper>
              </Grid>
              <Grid item xs>
                {/* <img
              src="https://grubs.s3.amazonaws.com/icons/vegan.png"
              onClick={() => chooseDiet(2)}
            /> */}{" "}
                <Paper className={classes.root} onClick={() => chooseDiet(2)}>
                  <span className="selection-type">Vegan</span>
                </Paper>
              </Grid>
              <Grid item xs>
                {/* <img
              src="https://grubs.s3.amazonaws.com/icons/omnivore.png"
              onClick={() => chooseDiet(3)}
            /> */}{" "}
                <Paper className={classes.root} onClick={() => chooseDiet(3)}>
                  <span className="selection-type">Vegetarian</span>
                </Paper>
              </Grid>
              <Grid item xs>
                {/* <img
              src="https://grubs.s3.amazonaws.com/icons/vegan.png"
              onClick={() => chooseDiet(4)}
            /> */}
                <Paper className={classes.root} onClick={() => chooseDiet(4)}>
                  <span className="selection-type">Pescatarian</span>
                </Paper>
              </Grid>
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
      <button onClick={handleChangeSelection}>Change Selection</button>
      <div style={{ width: "70%", display: "block", margin: "0 auto" }}>
        <Carousel>
          {recipes
            ? Object.values(recipes).map((recipe) => (
                <Carousel.Item key={recipe.recipeId}>
                  <img
                    style={{ height: "650px" }}
                    className="d-block w-100"
                    key={recipe.title}
                    onClick={() => openRecipePage(recipe.recipeId)}
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
