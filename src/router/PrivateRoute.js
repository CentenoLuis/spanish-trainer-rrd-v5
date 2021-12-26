import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { routes } from "../helpers/routes";

const PrivateRoute = ({ hasRole: role, ...props }) => {
  const location = useLocation();
  const { isLogged, hasRole } = useAuth();
  // console.log(location);

  if (role && !hasRole(role)) return <Redirect to={routes.home} />;

  if (!isLogged())
    return (
      <Redirect to={{ pathname: routes.login, state: { from: location } }} />
    );

  return <Route {...props}></Route>;
};

export default PrivateRoute;
