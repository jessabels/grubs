import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TextField, Button, List, ListItem, Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./RecipeEditForm.css";
import {
  getSavedRecipes,
  createInstruction,
  createIngredient,
} from "../store/actions/entities";

const useStyles = makeStyles((theme) => ({
  secondaryButton: {
    margin: "10px 0",
    background: "white",
    "&:hover": {
      background: "rgb(220 177 78 / 41%)",
    },
  },
}));

const RecipeEditForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSavedRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.entities.recipes);
  const currentRecipeId = parseInt(localStorage.getItem("CURRENT_RECIPE_ID"));
  const currentRecipe = Object.values(recipes).length
    ? recipes[currentRecipeId]
    : null;

  const [amount, setAmount] = useState("");
  const [product, setProduct] = useState("");
  const [specification, setSpecification] = useState("");

  const handleAddIngredient = (e) => {
    e.preventDefault();

    dispatch(createIngredient(amount, product, currentRecipeId));
    setAmount("");
    setProduct("");
  };

  const handleAddInstruction = (e) => {
    e.preventDefault();

    dispatch(createInstruction(specification, currentRecipeId));
    setSpecification("");
  };
  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };

  return (
    <div className="recipe-edit">
      <Link to="/myRecipes">
        <Button
          className={classes.secondaryButton}
          startIcon={<ArrowBackIcon />}
        >
          Back to my recipes
        </Button>
      </Link>
      <div className="recipe-edit-container">
        <div className="recipe-header">
          <h1>{currentRecipe && currentRecipe.title}</h1>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              alt={currentRecipe && currentRecipe.description}
              src={currentRecipe && currentRecipe.imageUrl}
            />
            <p className="recipe-description">
              {currentRecipe && currentRecipe.description}{" "}
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="ingredients-instructions">
              <div className="recipe-ingredients-list">
                <h3 style={{ color: "#dcb14e" }}>Ingredients</h3>
                <List>
                  {currentRecipe && currentRecipe.ingredients.length
                    ? currentRecipe.ingredients.map((ingredient) => (
                        <ListItem key={ingredient}>{ingredient}</ListItem>
                      ))
                    : "No ingredients added!"}
                </List>
              </div>
              <div className="ingredients-form">
                <form noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="amount"
                    label="Amount"
                    name="amount"
                    autoFocus
                    value={amount}
                    onChange={updateProperty(setAmount)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="product"
                    label="Product"
                    name="product"
                    autoFocus
                    value={product}
                    onChange={updateProperty(setProduct)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleAddIngredient}
                  >
                    Add
                  </Button>
                </form>
              </div>

              <div className="recipe-instructions-list">
                <h3 style={{ color: "#dcb14e" }}>Instructions</h3>
                <List>
                  {currentRecipe && currentRecipe.instructions.length
                    ? currentRecipe.instructions.map((instruction, i) => (
                        <div key={instruction}>
                          <ListItem key={instruction}>
                            {`${i + 1}. ${instruction}`}
                          </ListItem>
                        </div>
                      ))
                    : "No Instructions added!"}
                </List>
              </div>
              <div className="instructions-form">
                <form>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="specification"
                    label="Instruction Text"
                    name="speciciation"
                    autoFocus
                    value={specification}
                    onChange={updateProperty(setSpecification)}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleAddInstruction}
                  >
                    Add
                  </Button>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RecipeEditForm;
