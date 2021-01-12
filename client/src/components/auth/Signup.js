import React, { useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ChatIcon from "@material-ui/icons/Chat";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { signup } from "../store/actions/entities";
import { useDispatch } from "react-redux";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundImage: "url('https://grubs.s3.amazonaws.com/gold-dot.png')",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    color: theme.palette.secondary.main,
  },
}));

const Signup = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.signupErrors);

  const listOfErrors = errors
    ? errors.map((error) => (
        <li key={error} style={{ color: "red" }}>
          {error}
        </li>
      ))
    : null;

  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(signup(firstName, lastName, email, password, confirmPassword));
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        {" "}
        <div className="welcome-text-signup">
          <h2>Welcome to Grubs!</h2>
          <p>
            Feeling hungry but not sure what to cook? Grubs makes it easy to
            browse through recipes based on course and your dietary preference.{" "}
          </p>
          <div className="welcome-description">
            <ImageSearchIcon className={classes.icon} />
            <p>Browse through recipes</p>
          </div>
          <div className="welcome-description">
            <CloudUploadIcon className={classes.icon} />
            <p>Upload recipes</p>
          </div>
          <div className="welcome-description">
            <ChatIcon className={classes.icon} />
            <p>Share feedback on recipes</p>
          </div>
          <div className="welcome-description">
            <WhatshotIcon className={classes.icon} />
            <p>Get cooking!</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{ fontFamily: "Cormorant Garamont", color: "black" }}
          >
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <ul>{listOfErrors}</ul>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
              value={firstName}
              onChange={updateProperty(setFirstName)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoFocus
              value={lastName}
              onChange={updateProperty(setLastName)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={updateProperty(setEmail)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={updateProperty(setPassword)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={updateProperty(setConfirmPassword)}
            />

            <Button
              style={{ color: "white", fontWeight: "bold" }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
