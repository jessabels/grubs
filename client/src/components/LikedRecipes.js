import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipeLikes,
  getRecipeTips,
  getTipLikes,
  getUsers,
  createRecipeTip,
  getAllRecipes,
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
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import RecipeDetailModal from "./RecipeDetailModal";
import { currentRecipeId } from "./store/actions/session";
import "./MyRecipes.css";

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
  const [openRecipeCard, setOpenRecipeCard] = useState(false);
  const [openConfirmationMsg, setOpenConfirmationMsg] = useState(false);
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
    setOpenRecipeCard(false);
  };

  const handleRecipeCardClick = (recipeId) => {
    setOpenRecipeCard(true);
    dispatch(currentRecipeId(recipeId));
  };

  const handleDeleteConfirmationOpen = () => {
    setOpenConfirmationMsg(true);
  };

  const handleDeleteConfirmationClose = () => {
    setOpenConfirmationMsg(false);
  };

  const handleTipSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecipeTip(text, currentRecipeId));
    setText("");
  };

  const handleLike = (recipeId) => {
    dispatch(likeRecipe(recipeId));
    handleDeleteConfirmationClose();
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
              <React.Fragment key={recipe.recipeId}>
                <Grid item xs={6} sm={4}>
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
                        <IconButton onClick={handleDeleteConfirmationOpen}>
                          <FavoriteIcon className="icon" />
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
                <Dialog
                  open={openConfirmationMsg}
                  onClose={handleDeleteConfirmationClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to unlike this recipe?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => handleLike(recipe.recipeId)}
                      color="primary"
                    >
                      Yes
                    </Button>
                    <Button
                      onClick={handleDeleteConfirmationClose}
                      color="primary"
                    >
                      No
                    </Button>
                  </DialogActions>
                </Dialog>
              </React.Fragment>
            );
          })
        ) : (
          <h3>No liked recipes!</h3>
        )}
        <RecipeDetailModal
          open={openRecipeCard}
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
