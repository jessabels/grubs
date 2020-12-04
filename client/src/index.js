import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./App";
import { Provider } from "react-redux";
import configureStore from "./components/store/configureStore";

const initialState = {
  entities: {},
  errors: {
    loginErrors: [],
    signupErrors: [],
  },
};
const store = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
