import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContainer from "./App";
import { Provider } from "react-redux";
import configureStore from "./components/store/configureStore";

const initialState = {
  entities: {
    recipes: {},
    recipeLikes: {},
    tipLikes: {},
    recipeTips: {},
    users: {},
  },
  errors: {
    loginErrors: [],
    signupErrors: [],
  },
  sessions: {
    currentRecipeId: null,
    currentUserId: null,
  },
};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
