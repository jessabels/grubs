import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipeLikes,
  getRecipeTips,
  getTipLikes,
  getUsers,
  getLikedRecipes,
  createRecipeTip,
  getAllRecipes,
  unlikeRecipe,
  likeRecipe,
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
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
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

const LikedRecipes = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const users = useSelector((state) => state.entities.users);
  const likes = useSelector((state) => state.entities.recipeLikes);
  const currentUserId = useSelector((state) =>
    parseInt(state.sessions.currentUserId)
  );
  const recipes = useSelector((state) => state.entities.recipes);
  let userLiked;
  const userLikes =
    likes &&
    Object.values(likes).filter((like) => like.userId === currentUserId);

  let likedRecipes = [];
  userLikes.forEach((userLike) => {
    Object.values(recipes).forEach((recipe) => {
      if (userLike.recipeId === recipe.recipeId) {
        likedRecipes.push(recipe);
      }
    });
  });

  const recipeTips = useSelector((state) => state.entities.recipeTips);

  const selectedRecipeId = useSelector((state) =>
    recipes ? state.sessions.currentRecipeId : null
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleRecipeCardClick = (recipeId) => {
    setOpen(true);
    dispatch(currentRecipeId(recipeId));
  };

  const handleTipSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecipeTip(text, currentRecipeId));
    setText("");
  };

  const handleLike = (recipeId) => {
    if (userLiked) {
      dispatch(unlikeRecipe(recipeId));
    } else {
      dispatch(likeRecipe(recipeId));
    }
  };

  const truncateText = (text) =>
    text.length > 44 ? `${text.substring(0, 44)}...` : text;

  return (
    <div className="savedRecipes-container">
      <h1>Liked Recipes</h1>
      <Grid container>
        {likedRecipes && Object.values(likedRecipes).length ? (
          Object.values(likedRecipes).map((recipe) => {
            userLiked = likes
              ? Object.values(likes).some((recipeLike) => {
                  return (
                    recipeLike.userId === parseInt(currentUserId) &&
                    recipeLike.recipeId === recipe.recipeId
                  );
                })
              : null;

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
                      <IconButton>
                        <FavoriteIcon
                          className="icon"
                          onClick={() => handleLike(recipe.recipeId)}
                        />
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
          <h3>No liked recipes!</h3>
        )}
        <RecipeDetailModal
          open={open}
          handleClose={handleClose}
          Transition={Transition}
          currentRecipe={currentRecipe}
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

export default LikedRecipes;
