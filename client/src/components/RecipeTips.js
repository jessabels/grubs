import React, { useState } from "react";

import {
  Button,
  Grid,
  List,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const RecipeTips = (props) => {
  const { currentRecipe, getTipsForRecipe } = props;

  const { handleTipSubmit, text, setText } = props;

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
