import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  getRecipeLikes,
  getRecipes,
  getRecipeTips,
  getTipLikes,
  getUsers,
} from "./store/actions/entities";
import { currentRecipeId } from "./store/actions/session";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { Slide } from "@material-ui/core";

import RecipeDetailModal from "./RecipeDetailModal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CourseSelection = () => {
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
                <Carousel.Item key={recipe.id}>
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
        <RecipeDetailModal
          open={open}
          handleClose={handleClose}
          Transition={Transition}
          currentRecipe={currentRecipe}
          handlesave={handleSave}
          recipeTips={recipeTips}
          users={users}
        />
      </div>
    </>
  );
};

export default CourseSelection;
