import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Select,
  InputLabel,
  Input,
  //   MenuProps,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import "./RecipeForm.css";
import { createRecipe } from "./store/actions/entities";

const RecipeForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cookTime, setCookTime] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [course, setCourse] = useState("");
  const [diet, setDiet] = useState([]);

  const diets = [
    { type: "Omnivore", id: 1 },
    { type: "Vegan", id: 2 },
    { type: "Vegetarian", id: 3 },
    { type: "Pescatarian", id: 4 },
  ];
  const dietIds = diets
    .filter((currentDiet) => {
      return diet.includes(currentDiet.type);
    })
    .map((diet) => diet.id);

  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(
      createRecipe(title, description, cookTime, imageUrl, course, dietIds)
    );
    history.push({
      pathname: "/recipeEditForm",
    });
  };

  return (
    <div>
      <h1>Recipe Form</h1>
      <div className="recipe-form">
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoFocus
            value={title}
            onChange={updateProperty(setTitle)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            id="description"
            value={description}
            onChange={updateProperty(setDescription)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="imageUrl"
            label="Image Url"
            id="imageUrl"
            value={imageUrl}
            onChange={updateProperty(setImageUrl)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cookTime"
            label="Cook Time"
            type="number"
            id="cookTime"
            value={cookTime}
            onChange={updateProperty(setCookTime)}
          />
          <div className="course-diet-options">
            <InputLabel htmlFor="outlined-age-native-simple">Course</InputLabel>
            <Select
              native
              value={course}
              onChange={updateProperty(setCourse)}
              label="Course"
              inputProps={{
                name: "course",
                id: "outlined-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </Select>
            <InputLabel id="demo-mutiple-checkbox-label">Diet</InputLabel>

            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={diet}
              onChange={updateProperty(setDiet)}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              //   MenuProps={MenuProps}
            >
              {diets.map((currentDiet, index) => (
                <MenuItem key={currentDiet.type} value={currentDiet.type}>
                  <Checkbox checked={diet.indexOf(currentDiet.type) > -1} />
                  <ListItemText primary={currentDiet.type} />
                </MenuItem>
              ))}
            </Select>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
