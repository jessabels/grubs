import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipeLikes,
  getRecipeTips,
  getTipLikes,
  getUsers,
  getSavedRecipes,
  saveRecipe,
  deleteRecipe,
  createRecipeTip,
} from "./store/actions/entities";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import RecipeDetailModal from "./RecipeDetailModal";
import { Slide } from "@material-ui/core";

import { currentRecipeId } from "./store/actions/session";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState("");
  const recipes = useSelector((state) => state.entities.recipes);
  const recipeTips = useSelector((state) => state.entities.recipeTips);
  const users = useSelector((state) => state.entities.users);
  const selectedRecipeId = useSelector((state) =>
    recipes ? state.sessions.currentRecipeId : null
  );

  const currentRecipe = recipes ? recipes[selectedRecipeId] : null;
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSavedRecipes());
    dispatch(getRecipeLikes());
    dispatch(getRecipeTips());
    dispatch(getTipLikes());
    dispatch(getUsers());
  }, []);

  const handleSave = () => {
    dispatch(saveRecipe(selectedRecipeId));
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleRecipeCardClick = (recipeId) => {
    console.log("recipe id", recipeId);
    setOpen(true);
    dispatch(currentRecipeId(recipeId));
  };
  const handleDelete = (recipeId) => {
    dispatch(deleteRecipe(recipeId));
  };

  const handleTipSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecipeTip(text, currentRecipeId));
    setText("");
  };
  return (
    <>
      <h1>Saved Recipes</h1>
      {recipes
        ? Object.values(recipes).map((recipe) => {
            return (
              <Card key={recipe.id} className={classes.root}>
                <CardHeader
                  action={
                    <IconButton aria-label="delete">
                      <DeleteIcon
                        onClick={() => handleDelete(recipe.recipeId)}
                      />
                    </IconButton>
                  }
                  title={recipe.title}
                />
                <CardMedia
                  onClick={() => handleRecipeCardClick(recipe.recipeId)}
                  className={classes.media}
                  image={recipe.imageUrl}
                  title={recipe.title}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {recipe.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        : "No saved recipes!"}
      <RecipeDetailModal
        open={open}
        handleClose={handleClose}
        Transition={Transition}
        currentRecipe={currentRecipe}
        handleSave={handleSave}
        recipeTips={recipeTips}
        users={users}
        text={text}
        setText={setText}
        handleTipSubmit={handleTipSubmit}
      />
    </>
  );
};

export default Profile;
