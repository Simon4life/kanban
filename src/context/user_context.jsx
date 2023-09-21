import React, { useContext, useReducer } from "react";
import reducer from "../reducers/user_reducer";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
} from "../utils/localStorage";
import customFetch from "../utils/axios";

const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  errorMessage: null,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // register user
  const registerUser = async (user) => {
    state.isLoading = true;
    try {
      const res = await customFetch.post("/auth/register", user);
      dispatch({ type: "REGISTER_USER", payload: res.data });
      addUserToLocalStorage(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // login user
  const loginUser = async (user) => {
    dispatch({ type: "TOGGLE_LOADING" });
    try {
      const res = await customFetch.post("/auth/login", user);
      dispatch({ type: "LOGIN_USER", payload: res.data });
      addUserToLocalStorage(res.data);
    } catch (error) {
      if (error.message === "Network Error") {
        dispatch({
          type: "UPDATE_ERROR_MSG",
          payload: "There seems to be something wrong with your connection",
        });
      } else {
        if (error.response.data.message === "User Not found") {
          dispatch({
            type: "UPDATE_ERROR_MSG",
            payload: "Wrong Email or password",
          });
        }
      }
      dispatch({ type: "TOGGLE_LOADING" });
    }
  };

  return (
    <UserContext.Provider value={{ ...state, registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
