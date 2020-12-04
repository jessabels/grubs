import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import errors from "./actions/errors";
import currentUserId from "./actions/session";
import user from "./actions/user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  entities: user,
  errors,
  sessions: currentUserId,
});

const configureStore = (intial) => {
  return createStore(reducer, intial, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
