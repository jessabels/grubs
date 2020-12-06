import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Grid,
  List,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { createRecipeTip } from "./store/actions/entities";

const RecipeTips = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.entities.recipes);
  const currentRecipeId = useSelector((state) =>
    recipes ? state.sessions.currentRecipeId : null
  );

  const { currentRecipe, getTipsForRecipe } = props;
  const [text, setText] = useState("");

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

  return (
    <Grid>
      <Grid item xs={3}>
        Tips
        <List>{currentRecipe ? getTipsForRecipe() : null} </List>
        <form noValidate autoComplete="off">
          <TextField
            rowsMax={4}
            required
            fullWidth
            name="text"
            label="Write your tip"
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" color="primary" onClick={handleTipSubmit}>
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default RecipeTips;
