import React from "react";

import { useSelector, useDispatch } from "react-redux";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const RecipeLike = (props) => {
  const likes = props ? props.likes : null;
  const dispatch = useDispatch();

  const handleLike = (recipeId) => {
    // if (!likes.includes(props.recipeId)) {
    //   //   dispatch(likePost(props.postId));
    //   console.log("liked");
    // } else {
    //   //   dispatch(unlikePost(props.postId));
    //   console.log("unliked");
    // }
    console.log("liked");
  };
  return (
    <>
      <span style={{ fontSize: ".5em", marginRight: "5px" }}>
        {props.likes.length}
      </span>
      {likes && likes.includes(props.recipeId) ? (
        <FavoriteIcon onClick={() => handleLike(props.recipeId)} />
      ) : (
        <FavoriteBorderIcon onClick={() => handleLike(props.recipeId)} />
      )}
    </>
  );
};

export default RecipeLike;
