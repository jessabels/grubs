import React from "react";

import { Button, TextField, InputAdornment } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const RecipeTipForm = (props) => {
  const { handleTipSubmit, text, setText } = props;

  return (
    <div className="tip-form">
      <form onSubmit={handleTipSubmit}>
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
                <AccountCircle className="icon" />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RecipeTipForm;
