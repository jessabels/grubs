import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getRecipes } from "./store/actions/entities";
import { useSelector, useDispatch } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const CourseSelection = () => {
  const recipes = useSelector((state) => state.entities.Recipes);
  const dispatch = useDispatch();

  console.log("recipes", recipes);
  const [course, setCourse] = useState("");
  const [dietId, setDietId] = useState("");
  const [errors, setErrors] = useState("");
  const [hiddenOptions, setHiddenOptions] = useState(false);

  console.log(recipes);
  const slideImages = [
    "images/slide_2.jpg",
    "images/slide_3.jpg",
    "images/slide_4.jpg",
  ];
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
      setHiddenOptions(true);
    } else {
      setErrors("Please choose both a course & a diet.");
    }
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
    <div className="slide-container">
      {/* {console.log(recipes)}
      {recipes
        ? Object.values(recipes).map(
            (recipe) => (
              console.log(recipe),
              (
                <Slide>
                  <div className="each-slide">
                    <div style={{ backgroundImage: `url(${recipe.imageUrl})` }}>
                      <span>Slide 1</span>
                    </div>
                  </div>
                </Slide>
              )
            )
          )
        : null} */}
    </div>
  );
};

export default CourseSelection;
