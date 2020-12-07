import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const RecipeDetailModal = (props) => {
  const classes = useStyles();
  const {
    open,
    handleClose,
    Transition,
    currentRecipe,
    handleSave,
    recipeTips,
    users,
  } = props;

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
            <Button autoFocus color="inherit" onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper>
              <img
                style={{ width: "100%" }}
                src={currentRecipe ? currentRecipe.imageUrl : null}
              />
              <RecipeLike
                likes={currentRecipe ? currentRecipe.likes : null}
                recipeId={currentRecipe ? currentRecipe.recipeId : null}
              />
              <h5>
                Cook Time:
                {currentRecipe ? `${currentRecipe.cookTime} min` : null}
              </h5>
              <h5>Course: {currentRecipe ? currentRecipe.course : null}</h5>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <h3>Ingredients</h3>
              <List>
                {currentRecipe
                  ? currentRecipe.ingredients.map((ingredient) => (
                      <ListItem key={ingredient.id}>{ingredient} </ListItem>
                    ))
                  : null}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <h3>Instructions</h3>
              <List>
                {currentRecipe
                  ? currentRecipe.instructions.map((instruction, i) => (
                      <ListItem key={instruction}>
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
        />
      </Dialog>
      ;
    </>
  );
};

export default RecipeDetailModal;
