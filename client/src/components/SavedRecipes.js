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
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import RecipeDetailModal from "./RecipeDetailModal";
import { Slide } from "@material-ui/core";

import { currentRecipeId } from "./store/actions/session";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "50px",
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SavedRecipes = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const recipes = useSelector((state) => state.entities.recipes);
  const recipeTips = useSelector((state) => state.entities.recipeTips);
  const users = useSelector((state) => state.entities.users);
  const selectedRecipeId = useSelector((state) =>
    recipes ? state.sessions.currentRecipeId : null
  );

  const currentRecipe = Object.values(recipes).length
    ? recipes[selectedRecipeId]
    : null;
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavedRecipes());
    dispatch(getRecipeLikes());
    dispatch(getRecipeTips());
    dispatch(getTipLikes());
    dispatch(getUsers());
  }, [dispatch]);

  const handleSave = () => {
    dispatch(saveRecipe(selectedRecipeId));
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleRecipeCardClick = (recipeId) => {
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
      <Grid container>
        {recipes ? (
          Object.values(recipes).map((recipe) => {
            return (
              <Grid key={recipe.recipeId} item xs={6} sm={3}>
                <Card className={classes.root}>
                  <CardHeader
                    title={recipe.title}
                    action={
                      <IconButton onClick={() => handleDelete(recipe.recipeId)}>
                        <DeleteIcon />
                      </IconButton>
                    }
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
              </Grid>
            );
          })
        ) : (
          <h3>No saved recipes!</h3>
        )}
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
      </Grid>
    </>
  );
};

export default SavedRecipes;
