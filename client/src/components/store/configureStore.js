import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import loginErrors from "./actions/loginErrors";
import signupErrors from "./actions/signupErrors";
import currentUserId from "./actions/session";
import user from "./actions/user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  entities: user,
  errors: { loginErrors, signupErrors },
  sessions: currentUserId,
});

const configureStore = (intial) => {
  return createStore(reducer, intial, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
