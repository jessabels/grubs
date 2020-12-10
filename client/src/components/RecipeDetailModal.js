import React, { useState, useEffect } from "react";
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
import RecipeTip from "./RecipeTip";
import RecipeTipForm from "./RecipeTipForm";
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

  const [inputVisible, setInputVisible] = useState(false);
  const [editText, setEditText] = useState("");
  const [tips, setTips] = useState(null);
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

  useEffect(() => {
    if (currentRecipe) {
      setTips(
        Object.values(recipeTips).filter((recipeTip) => {
          return currentRecipe.tips.includes(recipeTip.id);
        })
      );
    }
  }, [currentRecipe]);

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
            <p>{currentRecipe ? currentRecipe.description : null}</p>
            <p>
              Cook Time:
              {currentRecipe ? `${currentRecipe.cookTime} min` : null}
            </p>
          </Paper>
        </div>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h3>Ingredients</h3>
              <List>
                {currentRecipe
                  ? currentRecipe.ingredients.map((ingredient) => (
                      <ListItem className={classes.listItem} key={ingredient}>
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

        {tips &&
          tips.map((tip) => (
            <RecipeTip
              tip={tip}
              tips={tips}
              users={users}
              currentUserId={currentUserId}
              currentRecipe={currentRecipe}
            />
          ))}
        <RecipeTipForm
          handleTipSubmit={handleTipSubmit}
          text={text}
          setText={setText}
        />
      </Dialog>
    </>
  );
};

export default RecipeDetailModal;
