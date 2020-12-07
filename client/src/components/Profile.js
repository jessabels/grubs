import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipeLikes,
  getRecipes,
  getRecipeTips,
  getTipLikes,
  getUsers,
  getSavedRecipes,
} from "./store/actions/entities";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSavedRecipes());
    dispatch(getRecipes());
    dispatch(getRecipeLikes());
    dispatch(getRecipeTips());
    dispatch(getTipLikes());
    dispatch(getUsers());
  }, []);
  return (
    <>
      <h1>Saved Recipes</h1>
    </>
  );
};

export default Profile;
