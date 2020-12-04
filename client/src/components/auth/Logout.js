import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/user";

const Logout = () => {
  const handleClick = () => {
    dispatch(logout());
  };

  const dispatch = useDispatch();
  return <button onClick={handleClick}>Logout</button>;
};

export default Logout;
