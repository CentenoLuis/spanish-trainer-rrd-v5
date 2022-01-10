import React from "react";
import { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import { roles } from "../helpers/roles";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [listUsers, setListUser] = useState(null);
  const history = useHistory();

  const updateUser = (data) => {
    setUser({ ...user, ...data });
  };

  const updateUserQuizzes = (data) => {
    setUser(data);
  };

  const login = (userCredentials, fromLocation) => {
    axios
      .post(
        "https://ancient-wave-13204.herokuapp.com/api/login",
        userCredentials
      )
      .then((res) => {
        console.log(res);
        setUser(res.data[0]);
      });

    if (fromLocation) {
      history.push(fromLocation);
    }
  };

  const logout = () => setUser(null);
  const isLogged = () => !!user;
  const hasRole = (role) => role && user?.role === role;

  const contextValue = {
    user,
    listUsers,
    updateUser,
    updateUserQuizzes,
    isLogged,
    hasRole,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
