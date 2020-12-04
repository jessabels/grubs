import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import errors from "./actions/errors";
import currentUserId from "./actions/session";
import entities from "./actions/entities";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  entities,
  errors,
  sessions: currentUserId,
});

const configureStore = (intial) => {
  return createStore(reducer, intial, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
