import React, { useContext, useReducer } from "react";
import reducer from "../reducers/user_reducer";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage
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
      const res = await customFetch().post("/auth/register", user);
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
      await customFetch().post("/auth/login", user).then((res) => {
        dispatch({ type: "LOGIN_USER", payload: res.data });
        addUserToLocalStorage(res.data);
      });  
    } catch (error) {
      dispatch({ type: "TOGGLE_LOADING" });
    }
  };

  const logoutUser = async () => {
    await customFetch().get("/auth/logout").then(() => {
    dispatch({type: "LOGOUT_USER"});
    removeUserFromLocalStorage();
    });
    
  }

  return (
    <UserContext.Provider value={{ ...state, registerUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
