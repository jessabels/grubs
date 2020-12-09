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

const RecipeTips = (props) => {
  const formErrors = useSelector((state) => state.errors.tipFormErrors);

  const {
    currentRecipe,
    getTipsForRecipe,
    handleTipSubmit,
    text,
    setText,
  } = props;

  return (
    <div className="tips-container">
      Tips
      <List>{currentRecipe ? getTipsForRecipe() : null} </List>
      <div>{formErrors ? formErrors[0] : null}</div>
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
    </div>
  );
};

export default RecipeTips;
