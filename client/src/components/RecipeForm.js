import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Select,
  InputLabel,
  Input,
  MenuItem,
  Checkbox,
  ListItemText,
  FormControl,
  CircularProgress,
} from "@material-ui/core";
import "./RecipeForm.css";
import { createRecipe } from "./store/actions/entities";
import { recipeFormErrors } from "./store/actions/errors";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  circularProgress: {
    display: "block",
    margin: "20px auto",
  },

  btn: {
    marginTop: "20px",
  },
}));
const RecipeForm = () => {
  const classes = useStyles();
  const errors = useSelector((state) => state.errors.recipeFormErrors);
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cookTime, setCookTime] = useState(0);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState("");
  const [diet, setDiet] = useState([]);

  useEffect(() => {
    dispatch(recipeFormErrors([]));
  }, [dispatch]);
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

  const handleSave = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData();
    console.log("IMAGE", image);
    data.append("file", image);
    data.append("title", title);
    data.append("description", description);
    data.append("cookTime", cookTime);
    data.append("course", course);
    data.append("dietIds", dietIds);

    await dispatch(createRecipe(data));
    setLoading(false);
    if (title && description && image) {
      history.push({
        pathname: "/recipeEditForm",
      });
    }
  };

  const listOfErrors = errors
    ? errors.map((error) => (
        <li key={error} style={{ color: "red" }}>
          {error}
        </li>
      ))
    : null;
  return (
    <div className="recipe-form-container">
      <div className="recipe-form">
        <form noValidate>
          <h1 style={{ textAlign: "center" }}>Recipe Form</h1>
          <ul>{listOfErrors}</ul>
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
            name="file"
            id="fileUpload"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cookTime"
            label="Cook Time (minutes)"
            type="number"
            id="cookTime"
            value={cookTime}
            onChange={updateProperty(setCookTime)}
          />
          <div className="course-diet-options">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Course
              </InputLabel>
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
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-checkbox-label">Diet</InputLabel>

              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={diet}
                onChange={updateProperty(setDiet)}
                input={<Input />}
                renderValue={(selected) => selected.join(", ")}
              >
                {diets.map((currentDiet, index) => (
                  <MenuItem key={currentDiet.type} value={currentDiet.type}>
                    <Checkbox checked={diet.indexOf(currentDiet.type) > -1} />
                    <ListItemText primary={currentDiet.type} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <Button
            className={classes.btn}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Continue
          </Button>
          {loading ? (
            <CircularProgress className={classes.circularProgress} />
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
