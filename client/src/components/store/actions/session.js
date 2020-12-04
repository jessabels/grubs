export const CURRENT_USER_ID = "CURRENT_USER_ID";
export const SET_TOKEN = "SET_TOKEN";
export const TOKEN_KEY = "TOKEN_KEY";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

// export const saveToken = (tokenData) => async (dispatch) => {
//   const token = window.localStorage.setItem(TOKEN_KEY, tokenData);
//   if (token) {
//     dispatch(setToken(token));
//   }
// };

export const currentUserId = (id) => {
  return {
    type: CURRENT_USER_ID,
    id,
  };
};

export default function reducer(state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case CURRENT_USER_ID:
      newState["currentUserId"] = action.id;
      return newState;
    case SET_TOKEN:
      newState["currentToken"] = action.token;
      return newState;
    case REMOVE_TOKEN:
      newState["currentToken"] = null;
      return newState;
    default:
      return state;
  }
}
