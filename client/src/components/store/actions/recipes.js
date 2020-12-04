import merge from "lodash/merge";

export const GET_RECIPES = "GET_RECIPES";

export const load_recipes = (list) => {
  return {
    type: GET_RECIPES,
    list,
  };
};

export const getRecipes = (course, dietId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/recipes/${course}/${dietId}`, {
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
  switch (action.type) {
    case GET_RECIPES:
      const recipes = action.list.map((recipe) => ({
        [recipe.id]: recipe,
      }));
      console.log(recipes);
      return merge({}, state, ...recipes);
    default:
      return state;
  }
}
