import React from "react";

import { useSelector, useDispatch } from "react-redux";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const TipLike = (props) => {
  console.log("TIPSSSS!", props.tip);
  const currentUserId = useSelector((state) => state.sessions.currentUserId);

  console.log("TIPS", props.tips);

  const userLiked = props.tips.some((tip) => {
    return tip.likes.includes(parseInt(currentUserId));
  });

  console.log("USER LIKED TIP", userLiked);

  const handleLike = (tipId) => {
    if (userLiked) {
      console.log("user already liked");
    } else {
      console.log("user hasn't liked yet");
    }
  };
  return (
    <>
      {userLiked ? (
        <FavoriteIcon onClick={() => handleLike()} />
      ) : (
        <FavoriteBorderIcon onClick={() => handleLike()} />
      )}
      <span style={{ fontSize: ".5em", marginRight: "5px" }}>
        {props.tip ? `Useful(${props.tip.likes.length})` : 0}
      </span>
    </>
  );
};

export default TipLike;
