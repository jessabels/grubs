export const LOGIN_ERRORS = "LOGIN_ERRORS";

export const loginErrors = (errors) => {
  return {
    type: LOGIN_ERRORS,
    errors,
  };
};

export default function reducer(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case LOGIN_ERRORS:
      newState["loginErrors"] = action.errors;
      return newState;

    default:
      return state;
  }
}
