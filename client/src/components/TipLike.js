import React from "react";

import { useSelector, useDispatch } from "react-redux";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as outlinedThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";

import DeleteIcon from "@material-ui/icons/Delete";
import {
  likeRecipeTip,
  unlikeRecipeTip,
  removeRecipeTip,
} from "./store/actions/entities";

const TipLike = (props) => {
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

  return (
    <>
      {!userPosted && userLiked ? (
        <FontAwesomeIcon
          icon={solidThumbsUp}
          onClick={() => handleLike(props.tip.id)}
        />
      ) : !userPosted && !userLiked ? (
        <FontAwesomeIcon
          icon={outlinedThumbsUp}
          onClick={() => handleLike(props.tip.id)}
        />
      ) : (
        <DeleteIcon onClick={() => handleRemoveTip(props.tip.id)} />
      )}

      <span style={{ fontSize: ".5em", marginRight: "5px" }}>
        {props.tip ? `Useful(${props.tip.likes.length})` : 0}
      </span>
    </>
  );
};

export default TipLike;
