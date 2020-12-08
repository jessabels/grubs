import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Dialog,
  ListItem,
  List,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import RecipeLike from "./RecipeLike";
import TipLike from "./TipLike";
import RecipeTips from "./RecipeTips";
import { createRecipeTip } from "./store/actions/entities";
import "./RecipeDetailModal.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

  paper: {
    margin: "30px",
  },

  listItem: {
    borderTop: "1px solid #ececec",
  },
}));

const RecipeDetailModal = (props) => {
  const {
    open,
    handleClose,
    Transition,
    currentRecipe,
    handleSave,
    recipeTips,
    text,
    setText,
    users,
  } = props;

  const classes = useStyles();

  const recipes = useSelector((state) => state.entities.recipes);

  const currentRecipeId = useSelector((state) =>
    recipes ? state.sessions.currentRecipeId : null
  );

  const currentUserId = useSelector((state) =>
    parseInt(state.sessions.currentUserId)
  );

  const currentUser = users ? users[currentUserId] : null;

  const dispatch = useDispatch();

  const getTipsForRecipe = () => {
    const tips = Object.values(recipeTips).filter((recipeTip) => {
      return currentRecipe.tips.includes(recipeTip.id);
    });
    return tips.map((tip) => {
      return (
        <ListItem key={tip.id}>
          {`${tip.text} posted by ${users[tip.userId].firstName} ${
            users[tip.userId].lastName
          }`}
          <TipLike tips={tips} tip={tip} />
        </ListItem>
      );
    });
  };
  const handleTipSubmit = (e) => {
    const currentRecipeCourse = currentRecipe.course;
    const currentRecipeDietId = currentRecipe.dietId;
    e.preventDefault();
    dispatch(
      createRecipeTip(
        text,
        currentRecipeId,
        currentRecipeCourse,
        currentRecipeDietId
      )
    );
    setText("");
  };

  const userAlreadySaved =
    currentUser && currentUser.savedRecipes
      ? currentUser.savedRecipes.includes(currentRecipeId)
      : null;
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {currentRecipe ? currentRecipe.title : null}
            </Typography>
            {userAlreadySaved ? (
              <Button variant="contained" disabled>
                Saved
              </Button>
            ) : (
              <Button autoFocus color="inherit" onClick={handleSave}>
                Save
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <div className="recipe-image">
          <Paper className={classes.paper}>
            <img
              style={{ width: "100%" }}
              src={currentRecipe ? currentRecipe.imageUrl : null}
            />
            <RecipeLike
              likes={currentRecipe ? currentRecipe.likes : null}
              recipeId={currentRecipe ? currentRecipe.recipeId : null}
            />
            <h5>{currentRecipe ? currentRecipe.description : null}</h5>
            <h5>
              Cook Time:
              {currentRecipe ? `${currentRecipe.cookTime} min` : null}
            </h5>
            <h5>Course: {currentRecipe ? currentRecipe.course : null}</h5>
          </Paper>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h3>Ingredients</h3>
              <List>
                {currentRecipe
                  ? currentRecipe.ingredients.map((ingredient) => (
                      <ListItem
                        className={classes.listItem}
                        key={ingredient.id}
                      >
                        {ingredient}{" "}
                      </ListItem>
                    ))
                  : null}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h3>Instructions</h3>
              <List>
                {currentRecipe
                  ? currentRecipe.instructions.map((instruction, i) => (
                      <ListItem className={classes.listItem} key={instruction}>
                        {i + 1}. {instruction}
                      </ListItem>
                    ))
                  : null}
              </List>
            </Paper>
          </Grid>
        </Grid>

        <RecipeTips
          getTipsForRecipe={getTipsForRecipe}
          currentRecipe={currentRecipe}
          handleTipSubmit={handleTipSubmit}
          text={text}
          setText={setText}
        />
      </Dialog>
      ;
    </>
  );
};

export default RecipeDetailModal;
