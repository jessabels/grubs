import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  getRecipeLikes,
  getRecipes,
  getRecipeTips,
  getUsers,
} from "./store/actions/entities";
import { currentRecipeId } from "./store/actions/session";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import {
  Button,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  GridItem,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Like from "./RecipeLike";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CourseSelection = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleSave = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

  const chooseCourse = (selectedCourse) => {
    setCourse(selectedCourse);
    console.log(selectedCourse);
  };

  const chooseDiet = (selectedDiet) => {
    setDietId(selectedDiet);
    console.log(selectedDiet);
  };

  const handleSubmitChoices = () => {
    if (course && dietId) {
      setErrors("");
      dispatch(getRecipes(course, dietId));
      dispatch(getRecipeLikes());
      dispatch(getRecipeTips());
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

  const getTipsForRecipe = () => {
    const tips = Object.values(recipeTips).filter((recipeTip) => {
      return currentRecipe.tips.includes(recipeTip.id);
    });
    return tips.map((tip) => {
      return (
        <ListItem>
          {`${tip.text} posted by ${users[tip.userId].firstName} ${
            users[tip.userId].lastName
          }`}
          <ThumbUpIcon /> Useful(0)
        </ListItem>
      );
    });
  };

  return !hiddenOptions ? (
    <div>
      <h1>Choose a course </h1>
      <div>{errors}</div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper onClick={() => chooseCourse("Breakfast")}>Breakfast</Paper>
        </Grid>
        <Grid item xs>
          <Paper onClick={() => chooseCourse("Lunch")}>Lunch</Paper>
        </Grid>
        <Grid item xs>
          <Paper onClick={() => chooseCourse("Dinner")}>Dinner</Paper>
        </Grid>
      </Grid>
      <h1>Choose a diet</h1>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper onClick={() => chooseDiet(1)}>None</Paper>
        </Grid>
        <Grid item xs>
          <Paper onClick={() => chooseDiet(2)}>Vegan</Paper>
        </Grid>
        <Grid item xs>
          <Paper onClick={() => chooseDiet(3)}>Vegetarian</Paper>
        </Grid>
        <Grid item xs>
          <Paper onClick={() => chooseDiet(4)}>Pescatarian</Paper>
        </Grid>
      </Grid>
      <button onClick={handleSubmitChoices}>Done</button>
    </div>
  ) : (
    <>
      <button onClick={handleChangeSelection}>Change Selection</button>
      <div style={{ width: "70%", display: "block", margin: "0 auto" }}>
        <Carousel>
          {recipes
            ? Object.values(recipes).map((recipe) => (
                <Carousel.Item>
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
            : null}
        </Carousel>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {currentRecipe ? currentRecipe.title : null}
              </Typography>
              <Button autoFocus color="inherit" onClick={handleSave}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper>
                <img
                  style={{ width: "100%" }}
                  src={currentRecipe ? currentRecipe.imageUrl : null}
                />
                <Like
                  likes={currentRecipe ? currentRecipe.likes : null}
                  recipeId={currentRecipe ? currentRecipe.recipeId : null}
                />
                <h5>
                  Cook Time:
                  {currentRecipe ? `${currentRecipe.cookTime} min` : null}
                </h5>
                <h5>Course: {currentRecipe ? currentRecipe.course : null}</h5>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Ingredients</h3>
                <List>
                  {currentRecipe
                    ? currentRecipe.ingredients.map((ingredient) => (
                        <ListItem>{ingredient} </ListItem>
                      ))
                    : null}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <h3>Instructions</h3>
                <List>
                  {currentRecipe
                    ? currentRecipe.instructions.map((instruction, i) => (
                        <ListItem>
                          {i + 1}. {instruction}
                        </ListItem>
                      ))
                    : null}
                </List>
              </Paper>
            </Grid>
          </Grid>
          <Grid>
            <Grid item xs={3}>
              Tips
              <List>{currentRecipe ? getTipsForRecipe() : null} </List>
            </Grid>
          </Grid>
        </Dialog>
      </div>
    </>
  );
};

export default CourseSelection;
