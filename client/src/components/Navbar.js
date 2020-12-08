import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";

import "./Navbar.css";
import Logout from "./auth/Logout";

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div className="navbar-container">
      <AppBar className={classes.navbar} position="static">
        <Toolbar className={classes.navbar}>
          <div className="logo-info">
            {props.location.pathname === "/profile" ? (
              <NavLink to="/">
                <HomeIcon />{" "}
              </NavLink>
            ) : null}
          </div>

          <div className="user-info" style={{ display: "flex" }}>
            <Link to="/profile">
              <Avatar alt="user avatar"></Avatar>
            </Link>
            {!props.needLogin ? <Logout /> : null}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
