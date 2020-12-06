import merge from "lodash/merge";
import { loginErrors, signupErrors } from "./errors";
import { currentUserId, loadToken, removeToken } from "./session";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_LIKES = "GET_RECIPE_LIKES";
export const GET_RECIPE_TIPS = "GET_RECIPE_TIPS";
export const GET_USERS = "GET_USERS";
export const TOKEN_KEY = "TOKEN_KEY";
export const USER_ID = "USER_ID";

export const loadRecipes = (list) => {
  return {
    type: GET_RECIPES,
    list,
  };
};
export const loadRecipeLikes = (list) => {
  return {
    type: GET_RECIPE_LIKES,
    list,
  };
};

export const loadRecipeTips = (list) => {
  return {
    type: GET_RECIPE_TIPS,
    list,
  };
};

export const loadUsers = (list) => {
  return {
    type: GET_USERS,
    list,
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
      console.log("data", data);
      dispatch(loginErrors([]));
      dispatch(currentUserId(data.userId));
      window.localStorage.setItem(USER_ID, data.userId);
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
      dispatch(signupErrors([]));
      dispatch(currentUserId(data.user.id));
      window.localStorage.setItem(TOKEN_KEY, data.token);
      window.localStorage.setItem(USER_ID, data.userId);
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
      dispatch(loadRecipes(list));
    } else {
      throw response;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getRecipeLikes = () => async (dispatch) => {
  try {
    const response = await fetch(`/api/recipes/likes`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const list = await response.json();
      dispatch(loadRecipeLikes(list));
    } else {
      throw response;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getRecipeTips = () => async (dispatch) => {
  try {
    const response = await fetch(`/api/recipes/tips`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const list = await response.json();
      console.log("LIST", list);
      dispatch(loadRecipeTips(list));
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
      dispatch(loadUsers(data));
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
      // const users = action.list.map((user) => ({
      //   [user.id]: user,
      // }));
      // return merge({}, state, ...users);
      newState["users"] = {};

      const users = action.list.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
      }));

      users.forEach((user) => {
        newState.users[user.id] = { ...user };
      });
      return newState;
    case GET_RECIPES:
      newState["recipes"] = {};
      const recipes = action.list.map((recipe) => ({
        recipeId: recipe.recipeId,
        dietId: recipe.dietId,
        title: recipe.title,
        description: recipe.description,
        cookTime: recipe.cookTime,
        imageUrl: recipe.imageUrl,
        course: recipe.course,
        likes: recipe.likes,
        tips: recipe.tips,
        instructions: recipe.instructions,
        ingredients: recipe.ingredients,
      }));

      recipes.forEach((recipe) => {
        newState.recipes[recipe.recipeId] = { ...recipe };
      });

      return newState;

    case GET_RECIPE_LIKES:
      newState["recipeLikes"] = {};
      const likes = action.list.likes.map((like) => ({
        id: like.id,
        userId: like.userId,
        recipeId: like.likeableId,
      }));

      likes.forEach((like) => {
        newState.recipeLikes[like.id] = { ...like };
      });
      return newState;

    case GET_RECIPE_TIPS:
      newState["recipeTips"] = {};

      const tips = action.list.map((tip) => ({
        id: tip.id,
        text: tip.text,
        userId: tip.userId,
        recipeId: tip.likeableId,
        likes: tip.likes,
      }));

      tips.forEach((tip) => {
        newState.recipeTips[tip.id] = { ...tip };
      });
      return newState;

    default:
      return state;
  }
}
