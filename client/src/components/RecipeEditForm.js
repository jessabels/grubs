import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import { TextField, Button, List, ListItem } from "@material-ui/core";
import "./RecipeForm.css";
import {
  getSavedRecipes,
  createInstruction,
  createIngredient,
} from "./store/actions/entities";

const RecipeEditForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSavedRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.entities.recipes);
  const currentRecipeId = parseInt(localStorage.getItem("CURRENT_RECIPE_ID"));
  console.log("current recipe Id", currentRecipeId);
  const currentRecipe = Object.values(recipes).length
    ? recipes[currentRecipeId]
    : null;

  const [amount, setAmount] = useState("");
  const [product, setProduct] = useState("");
  const [specification, setSpecification] = useState("");

  const handleAddIngredient = (e) => {
    e.preventDefault();

    dispatch(createIngredient(amount, product, currentRecipeId));
  };

  const handleAddInstruction = (e) => {
    e.preventDefault();

    dispatch(createInstruction(specification, currentRecipeId));
  };
  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };

  return (
    <div>
      <Link to="/myRecipes">Back to my recipes</Link>
      <h1>{currentRecipe && currentRecipe.title}</h1>
      <img
        alt={currentRecipe && currentRecipe.description}
        src={currentRecipe && currentRecipe.imageUrl}
      />
      <div className="recipe-ingredients-list">
        {/* get all ingredients for new recipe and list them here */}
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

        <div className="recipe-instructions-list">
          {/* get all ingredients for new recipe and list them here */}
          <List>
            {currentRecipe && currentRecipe.instructions.length
              ? currentRecipe.instructions.map((instruction, i) => (
                  <>
                    <span className="number-step">{i + 1}.</span>
                    <ListItem key={instruction}>{instruction}</ListItem>
                  </>
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
    </div>
  );
};

export default RecipeEditForm;