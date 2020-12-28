import React, { useEffect, useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
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
  getAllRecipes,
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
  Slide,
  Button,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import RecipeDetailModal from "./RecipeDetailModal";
import { currentRecipeId } from "./store/actions/session";
import "./SavedRecipes.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "50px",
  },

  headerRoot: {
    height: "100px",
    alignItems: "flex-start",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    cursor: "pointer",
  },

  icon: {
    cursor: "pointer",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyRecipes = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const recipes = useSelector((state) => state.entities.recipes);
  const recipeTips = useSelector((state) => state.entities.recipeTips);
  const users = useSelector((state) => state.entities.users);
  const currentUserId = useSelector((state) =>
    parseInt(state.sessions.currentUserId)
  );
  const selectedRecipeId = useSelector((state) =>
    recipes ? state.sessions.currentRecipeId : null
  );

  const myRecipes = Object.values(recipes).filter(
    (recipe) => recipe.userId == currentUserId
  );
  const currentRecipe = Object.values(recipes).length
    ? recipes[selectedRecipeId]
    : null;
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getRecipeLikes());
    dispatch(getRecipeTips());
    dispatch(getTipLikes());
    dispatch(getUsers());
  }, [dispatch]);

  const handleSave = () => {
    dispatch(saveRecipe(selectedRecipeId));
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

  const truncateText = (text) =>
    text.length > 44 ? `${text.substring(0, 44)}...` : text;

  return (
    <div className="savedRecipes-container">
      <h1>My Recipes</h1>
      <Button>
        <Link to="/recipeForm"> Add Recipe </Link>
      </Button>
      <Grid container>
        {Object.values(myRecipes).length ? (
          Object.values(myRecipes).map((recipe) => {
            return (
              <Grid key={recipe.recipeId} item xs={6} sm={4}>
                <Card className={classes.root}>
                  <CardHeader
                    className={classes.headerRoot}
                    title={
                      <Typography
                        variant="h5"
                        className={classes.headerRoot}
                        style={{ fontFamily: "Cormorant Garamont" }}
                      >
                        {recipe.title}
                      </Typography>
                    }
                    action={
                      <IconButton onClick={() => handleDelete(recipe.recipeId)}>
                        <DeleteIcon className="icon" />
                      </IconButton>
                    }
                  ></CardHeader>
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
                      style={{ fontFamily: "Cormorant Garamont" }}
                    >
                      {truncateText(recipe.description)}
                      <MoreHorizIcon
                        className={classes.icon}
                        onClick={() => handleRecipeCardClick(recipe.recipeId)}
                      />
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
    </div>
  );
};

export default MyRecipes;
