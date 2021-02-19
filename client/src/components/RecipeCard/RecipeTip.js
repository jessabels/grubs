import React, { useState } from "react";

import { ListItem, TextField } from "@material-ui/core";
import TipActions from "./TipActions";

const RecipeTip = ({ tip, tips, users, currentUserId }) => {
  const userPosted = tip.userId === currentUserId;
  const [inputVisible, setInputVisible] = useState(false);
  const [editText, setEditText] = useState("");

  return (
    <>
      {inputVisible && userPosted ? (
        <ListItem key={tip.id}>
          <TextField
            fullWidth
            variant="outlined"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />

          <TipActions
            tips={tips}
            tip={tip}
            setInputVisible={setInputVisible}
            inputVisible={inputVisible}
            editText={editText}
            setEditText={setEditText}
          />
        </ListItem>
      ) : (
        <ListItem key={tip.id}>
          {`${tip.text}`} -{" "}
          {`${users[tip.userId].firstName} ${users[tip.userId].lastName}`}
          <TipActions
            tips={tips}
            tip={tip}
            setInputVisible={setInputVisible}
            inputVisible={inputVisible}
            editText={editText}
            setEditText={setEditText}
          />
        </ListItem>
      )}
    </>
  );
};

export default RecipeTip;
