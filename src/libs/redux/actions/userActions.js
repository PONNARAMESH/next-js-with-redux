import AxiosInstance from "../../../utils/axiosInstance";

export const userActionTypes = {
  IS_USER_LOADING: "IS_USER_LOADING",
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
  EDIT_USER: "EDIT_USER",
  FETCH_USERS: "FETCH_USERS",
};

export function getUsers() {
  return function (dispatch, getState) {
    dispatch({
      type: userActionTypes.IS_USER_LOADING,
      payload: { isLoading: true },
    });

    AxiosInstance.get("https://dummyjson.com/users")
      .then((res) => {
        if (res && res?.data?.users) {
          dispatch({
            type: userActionTypes.FETCH_USERS,
            payload: res?.data?.users,
          });
        }
      })
      .catch((error) => {
        console.log("##error: ", error);
      })
      .finally(() => {
        dispatch({
          type: userActionTypes.IS_USER_LOADING,
          payload: { isLoading: false },
        });
      });
  };
}

export function addUser(userInfo) {
  return function (dispatch, getState) {
    dispatch({
      type: userActionTypes.IS_USER_LOADING,
      payload: { isLoading: true },
    });

    return AxiosInstance.post("https://dummyjson.com/users", userInfo)
      .then((res) => {
        if (res && res.length) {
          dispatch(getUsers());
        }
      })
      .catch((error) => {
        console.log("##error: ", error);
      })
      .finally(() => {
        dispatch({
          type: userActionTypes.IS_USER_LOADING,
          payload: { isLoading: false },
        });
      });
  };
}

export function editUser(userInfo) {
  return function (dispatch, getState) {
    dispatch({
      type: userActionTypes.IS_USER_LOADING,
      payload: { isLoading: true },
    });

    AxiosInstance.put(`https://dummyjson.com/users/${userInfo?.id}`, userInfo)
      .then((res) => {
        if (res && res?.data?.id) {
          dispatch({
            type: userActionTypes.EDIT_USER,
            payload: res?.data,
          });
        }
      })
      .catch((error) => {
        console.log("##error: ", error);
      })
      .finally(() => {
        dispatch({
          type: userActionTypes.IS_USER_LOADING,
          payload: { isLoading: false },
        });
      });
  };
}

export function deleteUser(id) {
  return function (dispatch, getState) {
    dispatch({
      type: userActionTypes.IS_USER_LOADING,
      payload: { isLoading: true },
    });

    AxiosInstance.delete(`https://dummyjson.com/users/${id}`)
      .then((res) => {
        console.log("add-res: ", res);
        if (res && res?.data?.id) {
          dispatch({
            type: userActionTypes.DELETE_USER,
            payload: res?.data,
          });
        }
      })
      .catch((error) => {
        console.log("##error: ", error);
      })
      .finally(() => {
        dispatch({
          type: userActionTypes.IS_USER_LOADING,
          payload: { isLoading: false },
        });
      });
  };
}
