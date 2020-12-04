import merge from "lodash/merge";
import { loginErrors, signupErrors } from "./errors";
import { currentUserId, loadToken, removeToken } from "./session";

export const GET_RECIPES = "GET_RECIPES";
export const GET_USERS = "GET_USERS";
export const TOKEN_KEY = "TOKEN_KEY";

export const loadRecipes = (list) => {
  return {
    type: GET_RECIPES,
    list,
  };
};

export const loadUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

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
      dispatch(loadToken(data.token));
    } else {
      throw response;
    }
  } catch (err) {
    const badRequest = await err.json();
    const errors = badRequest.error.errors;
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
      dispatch(currentUserId(data.user.id));
      window.localStorage.setItem(TOKEN_KEY, data.token);
      dispatch(loadToken(data.token));
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

export const logout = () => async (dispatch, getState) => {
  window.localStorage.removeItem(TOKEN_KEY);
  dispatch(removeToken());
};

export const getRecipes = (course, dietId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/recipes/${course}/${dietId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const list = await response.json();
      console.log(list);
      dispatch(loadRecipes(list));
    } else {
      throw response;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const response = await fetch(`/api/users`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw response;
    }
  } catch (err) {
    console.log(err);
  }
};

export default function reducer(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case GET_USERS:
      const users = action.list.map((user) => ({
        [user.id]: user,
      }));
      return merge({}, state, ...users);
    case GET_RECIPES:
      const recipes = action.list.map((recipe) => ({
        [recipe.recipeId]: recipe,
      }));
      console.log("new state", newState);
      return merge({}, state, ...recipes);
    // return (newState["recipes"] = recipes);

    default:
      return state;
  }
}
