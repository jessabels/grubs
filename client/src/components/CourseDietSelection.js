import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getRecipes } from "./store/actions/recipes";
import { useSelector, useDispatch } from "react-redux";

const CourseSelection = () => {
  const dispatch = useDispatch();

  const [course, setCourse] = useState("");
  const [dietId, setDietId] = useState("");
  const [errors, setErrors] = useState("");

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
    } else {
      setErrors("Please choose both a course & a diet.");
    }
  };
  return (
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
  );
};

export default CourseSelection;
