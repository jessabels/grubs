export const SIGNUP_ERRORS = "SIGNUP_ERRORS";

export const signupErrors = (errors) => {
  return {
    type: SIGNUP_ERRORS,
    errors,
  };
};

export default function reducer(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SIGNUP_ERRORS:
      newState["signupErrors"] = action.errors;
      return newState;

    default:
      return state;
  }
}
