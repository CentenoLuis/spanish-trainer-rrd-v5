import React from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
const userCredentials = {};
const LoginPage = () => {
  const location = useLocation();
  const { login } = useAuth();

  return (
    <div>
      <div>
        <h1>LoginPage Works</h1>
      </div>
      <div>
        <button onClick={() => login(userCredentials, location.state?.from)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
