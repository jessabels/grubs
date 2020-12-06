import React from "react";

import { useSelector, useDispatch } from "react-redux";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { currentRecipeId } from "./store/actions/session";

const RecipeLike = (props) => {
  const likes = props ? props.likes : null;
  const recipeLikes = useSelector((state) => state.entities.recipeLikes);
  const currentUserId = useSelector((state) => state.sessions.currentUserId);

  const currentRecipeId = useSelector(
    (state) => state.sessions.currentRecipeId
  );

  const userLiked = recipeLikes
    ? Object.values(recipeLikes).some((recipeLike) => {
        return (
          recipeLike.userId === parseInt(currentUserId) &&
          recipeLike.recipeId === currentRecipeId
        );
      })
    : null;

  console.log("user liked", userLiked);
  const dispatch = useDispatch();

  const handleLike = (recipeId) => {
    // if (!likes.includes(props.recipeId)) {
    //   //   dispatch(likePost(props.postId));
    //   console.log("liked");
    // } else {
    //   //   dispatch(unlikePost(props.postId));
    //   console.log("unliked");
    // }
    if (userLiked) {
      console.log("user already liked");
    } else {
      console.log("user hasn't liked yet");
    }
  };
  return (
    <>
      <span style={{ fontSize: ".5em", marginRight: "5px" }}>
        {props.likes.length}
      </span>
      {userLiked ? (
        <FavoriteIcon onClick={() => handleLike(props.recipeId)} />
      ) : (
        <FavoriteBorderIcon onClick={() => handleLike(props.recipeId)} />
      )}
    </>
  );
};

export default RecipeLike;
