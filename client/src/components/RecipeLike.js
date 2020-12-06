import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { likeRecipe, unlikeRecipe } from "./store/actions/entities";

const RecipeLike = (props) => {
  const recipes = useSelector((state) => state.entities.recipes);
  const recipeLikes = useSelector((state) => state.entities.recipeLikes);
  const currentUserId = useSelector((state) => state.sessions.currentUserId);

  const currentRecipeId = useSelector(
    (state) => state.sessions.currentRecipeId
  );

  const currentRecipe = recipes ? recipes[currentRecipeId] : null;

  const userLiked = recipeLikes
    ? Object.values(recipeLikes).some((recipeLike) => {
        return (
          recipeLike.userId === parseInt(currentUserId) &&
          recipeLike.recipeId === currentRecipeId
        );
      })
    : null;

  const dispatch = useDispatch();

  const handleLike = (recipeId) => {
    const currentRecipeCourse = currentRecipe.course;
    const currentRecipeDietId = currentRecipe.dietId;
    if (userLiked) {
      dispatch(
        unlikeRecipe(recipeId, currentRecipeCourse, currentRecipeDietId)
      );
    } else {
      dispatch(likeRecipe(recipeId, currentRecipeCourse, currentRecipeDietId));
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
