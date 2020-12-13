import React from "react";

import { useSelector, useDispatch } from "react-redux";

import CreateIcon from "@material-ui/icons/Create";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as outlinedThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";

import DeleteIcon from "@material-ui/icons/Delete";
import {
  likeRecipeTip,
  unlikeRecipeTip,
  removeRecipeTip,
  updateRecipeTip,
} from "./store/actions/entities";

const TipActions = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.entities.recipes);
  const currentRecipeId = useSelector(
    (state) => state.sessions.currentRecipeId
  );
  const currentRecipe = recipes ? recipes[currentRecipeId] : null;
  const currentRecipeCourse = currentRecipe.course;
  const currentRecipeDietId = currentRecipe.dietId;
  const currentUserId = useSelector((state) => state.sessions.currentUserId);

  const userLiked = props.tip.likes.includes(parseInt(currentUserId));
  const userPosted = props.tip.userId === parseInt(currentUserId);

  const handleLike = (tipId) => {
    if (userLiked) {
      // unlike a tip
      dispatch(
        unlikeRecipeTip(
          tipId,
          currentRecipeId,
          currentRecipeCourse,
          currentRecipeDietId
        )
      );
    } else {
      // like a tip
      dispatch(
        likeRecipeTip(
          tipId,
          currentRecipeId,
          currentRecipeCourse,
          currentRecipeDietId
        )
      );
    }
  };

  const handleRemoveTip = (tipId) => {
    dispatch(
      removeRecipeTip(
        tipId,
        currentRecipeId,
        currentRecipeCourse,
        currentRecipeDietId
      )
    );
  };

  const handleUpdateTip = (tipId) => {
    props.setInputVisible(false);

    dispatch(
      updateRecipeTip(
        props.editText,
        tipId,
        currentRecipeId,
        currentRecipeCourse,
        currentRecipeDietId
      )
    );
  };

  return (
    <>
      {!userPosted && userLiked ? (
        <FontAwesomeIcon
          className="icon"
          icon={solidThumbsUp}
          onClick={() => handleLike(props.tip.id)}
        />
      ) : !userPosted && !userLiked ? (
        <FontAwesomeIcon
          className="icon"
          icon={outlinedThumbsUp}
          onClick={() => handleLike(props.tip.id)}
        />
      ) : (
        <>
          {!props.inputVisible ? (
            <>
              <CreateIcon
                className="icon"
                onClick={() => {
                  props.setInputVisible(true);
                  props.setEditText(props.tip.text);
                }}
              />
              <DeleteIcon
                className="icon"
                onClick={() => handleRemoveTip(props.tip.id)}
              />
            </>
          ) : (
            <>
              <CheckIcon
                className="icon"
                onClick={() => handleUpdateTip(props.tip.id)}
              />
              <ClearIcon
                className="icon"
                onClick={() => props.setInputVisible(false)}
              />
            </>
          )}
        </>
      )}

      <span style={{ fontSize: ".8em", marginRight: "8px", width: "100px" }}>
        {props.tip ? `Useful (${props.tip.likes.length})` : 0}
      </span>
    </>
  );
};

export default TipActions;
