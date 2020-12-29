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
import { login } from "../store/actions/entities";
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
    backgroundPosition: "center",
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

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("demo@demo.com");
  const [password, setPassword] = useState("123");
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.loginErrors);

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

    dispatch(login(email, password));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <div className="welcome-text">
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
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <ul>{listOfErrors}</ul>
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
              autoComplete="current-password"
              value={password}
              onChange={updateProperty(setPassword)}
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
              Sign In
            </Button>

            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
