import React from "react";

import { useSelector, useDispatch } from "react-redux";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeRecipeTip } from "./store/actions/entities";

const TipLike = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.entities.recipes);
  const currentRecipeId = useSelector(
    (state) => state.sessions.currentRecipeId
  );
  const currentRecipe = recipes ? recipes[currentRecipeId] : null;

  const currentUserId = useSelector((state) => state.sessions.currentUserId);

  const userLiked = props.tips.some((tip) => {
    return tip.likes.includes(parseInt(currentUserId));
  });

  const userPosted = props.tip.userId === parseInt(currentUserId);

  const handleLike = (tipId) => {
    if (userLiked) {
      console.log("user already liked");
    } else {
      console.log("user hasn't liked yet");
    }
  };

  const handleRemoveTip = (tipId) => {
    const currentRecipeCourse = currentRecipe.course;
    const currentRecipeDietId = currentRecipe.dietId;
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
        <FavoriteIcon onClick={() => handleLike()} />
      ) : !userPosted && !userLiked ? (
        <FavoriteBorderIcon onClick={() => handleLike()} />
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
