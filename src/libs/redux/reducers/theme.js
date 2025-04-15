import { themeActionType } from "../actions/themeActions";

const initialUserState = {
  theme: 'light',
  isLoading: false,
};
export const themeReducers = (state = initialUserState, action) => {
  const { type, payload } = action;
  switch (type) {
    case themeActionType.IS_THEME_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case themeActionType.TOGGLE_THEME: {
      return {
        theme: payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
