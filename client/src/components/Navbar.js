import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar, Popover, List, ListItem } from "@material-ui/core";

import "./Navbar.css";
import Logout from "./auth/Logout";

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "#795",
  },
  listItem: {
    borderTop: "1px solid #f2f2f2",
    cursor: "pointer",

    "&:hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
  },
  avatar: {
    cursor: "pointer",
  },

  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "white",
      textDecoration: "none",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className="navbar-container">
        <AppBar className={classes.navbar} position="static">
          <Toolbar className={classes.navbar}>
            <div className="logo-info">
              {props.location.pathname === "/savedRecipes" ? (
                <NavLink to="/">
                  <HomeIcon style={{ color: "white" }} />
                </NavLink>
              ) : null}
            </div>

            {!props.needLogin ? (
              <>
                <div>
                  <NavLink to="/">
                    <img
                      alt="grubs-logo"
                      src="https://grubs.s3.amazonaws.com/grubs-logo.png"
                    />
                  </NavLink>
                </div>
                <div className="user-info" style={{ display: "flex" }}>
                  <Avatar
                    className={classes.avatar}
                    onClick={handleClick}
                    alt="user avatar"
                    style={{ backgroundColor: "#dcb14e" }}
                  ></Avatar>
                </div>
              </>
            ) : (
              <div className="grubs-logo">
                <img
                  alt="logo"
                  src="https://grubs.s3.amazonaws.com/grubs-logo.png"
                />
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <List>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.link}
                to="/savedRecipes"
                onClick={handleClose}
              >
                Saved Recipes
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Logout handleClose={handleClose} />
            </ListItem>
          </List>
        </Popover>
      </div>
    </>
  );
};

export default withRouter(Navbar);
