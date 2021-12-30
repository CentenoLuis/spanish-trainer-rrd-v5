import React from "react";
import { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import { roles } from "../helpers/roles";

export const AuthContext = createContext();

const dataUsers = [
  {
    id: 0,
    name: "Luis",
    email: "Luis@gmail.com",
    role: "admin",
  },
  {
    id: 1,
    name: "Luis2",
    email: "Luis2@gmail.com",
    role: "regular",
  },
  {
    id: 2,
    name: "Luis3",
    email: "Luis3@gmail.com",
    role: "admin",
  },
  {
    id: 3,
    name: "Luis4",
    email: "Luis4@gmail.com",
    role: "regular",
  },
];

const testUser = {
  name: "Luis",
  email: "Luis@gmail.com",
  password: "123456",
  role: roles.admin,
  quizzes: [
    { title: "Quiz1", content: "This is the content 1", date: "30-12-21" },
    { title: "Quiz2", content: "This is the content 2", date: "30-12-21" },
    { title: "Quiz3", content: "This is the content 3", date: "30-12-21" },
    { title: "Quiz4", content: "This is the content 4", date: "30-12-21" },
    { title: "Quiz5", content: "This is the content 5", date: "30-12-21" },
    { title: "Quiz6", content: "This is the content 6", date: "30-12-21" },
    { title: "Quiz7", content: "This is the content 7", date: "30-12-21" },
    { title: "Quiz8", content: "This is the content 8", date: "30-12-21" },
  ],
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [listUsers, setListUser] = useState(dataUsers);
  const history = useHistory();

  const updateUser = (data) => {
    setUser({ ...user, ...data });
  };

  const login = (userCredentials, fromLocation) => {
    setUser(testUser);

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
