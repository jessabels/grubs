import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipeLikes,
  getRecipeTips,
  getTipLikes,
  getUsers,
  getSavedRecipes,
  deleteRecipe,
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

const Profile = () => {
  const recipes = useSelector((state) => state.entities.recipes);
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSavedRecipes());
    dispatch(getRecipeLikes());
    dispatch(getRecipeTips());
    dispatch(getTipLikes());
    dispatch(getUsers());
  }, []);

  const handleDelete = (recipeId) => {
    dispatch(deleteRecipe(recipeId));
  };
  return (
    <>
      <h1>Saved Recipes</h1>
      {recipes
        ? Object.values(recipes).map((recipe) => {
            return (
              <Card className={classes.root}>
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
                  className={classes.media}
                  image={`${recipe.imageUrl}`}
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
    </>
  );
};

export default Profile;
