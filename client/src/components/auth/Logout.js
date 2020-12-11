import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/entities";

const Logout = (props) => {
  const handleClick = () => {
    props.handleClose();
    dispatch(logout());
  };

  const dispatch = useDispatch();
  return <span onClick={handleClick}>Logout</span>;
};

export default Logout;
