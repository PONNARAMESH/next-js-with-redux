import { userActionTypes } from "../actions/userActions";

const initialUserState = {
  data: [],
  isLoading: false,
};
export const userReducers = (state = initialUserState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActionTypes.IS_USER_LOADING: {
      return {
        ...state,
        ...payload,
      }
    }
    case userActionTypes.FETCH_USERS: {
      return {
        ...state,
        data: [...state.data, ...payload],
        isLoading: false,
      };
    }
    case userActionTypes.EDIT_USER: {
      return {
        ...state,
        isLoading: false,
        data: [
          ...(state.data || []).map((obj) => {
            if (obj.id === action?.payload?.id) {
              return action.payload;
            }
            return obj;
          }),
        ],
      };
    }
    case userActionTypes.DELETE_USER: {
      console.log("##data: ", payload)
      return {
        ...state,
        isLoading: false,
        data: state?.data?.filter((obj) => obj?.id !== payload?.id),
      };
    }
    default:
      return state;
  }
};
