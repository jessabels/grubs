import { loginErrors } from "./loginErrors";
import { signupErrors } from "./signupErrors";
import { currentUserId } from "./session";

export const SET_TOKEN = "SET_TOKEN";
export const TOKEN_KEY = "TOKEN_KEY";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await fetch(`/api/session`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      dispatch(loginErrors([]));
      dispatch(currentUserId(data.userId));
      window.localStorage.setItem(TOKEN_KEY, data.token);
    } else {
      throw response;
    }
  } catch (err) {
    const badRequest = await err.json();
    const errors = badRequest.error.errors;
    console.log(errors);
    dispatch(loginErrors(errors));
  }
};

export const signup = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => async (dispatch) => {
  try {
    const response = await fetch(`/api/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      dispatch(signupErrors([]));
      dispatch(currentUserId(data.userId));
      window.localStorage.setItem(TOKEN_KEY, data.token);
    } else {
      throw response;
    }
  } catch (err) {
    const badRequest = await err.json();
    const errors = badRequest.error.errors;
    console.log(errors);
    dispatch(signupErrors(errors));
  }
};

export default function reducer(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    default:
      return state;
  }
}
