import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import QuizzesPage from "../pages/QuizzesPage";
import QuizzPage from "../pages/QuizzPage";
import RegisterPage from "../pages/RegisterPage";
import UsersPage from "../pages/UsersPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { roles } from "../helpers/roles";
import { routes } from "../helpers/routes";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={HomePage}></Route>

      <PublicRoute
        exact
        path={routes.login}
        component={LoginPage}
      ></PublicRoute>

      <PublicRoute
        exact
        path={routes.register}
        component={RegisterPage}
      ></PublicRoute>

      <PrivateRoute
        exact
        path={routes.dashboard}
        component={DashboardPage}
      ></PrivateRoute>

      <PrivateRoute
        exact
        path={routes.quizzes}
        component={QuizzesPage}
      ></PrivateRoute>

      <PrivateRoute
        exact
        path={routes.quizz()}
        component={QuizzPage}
      ></PrivateRoute>

      <PrivateRoute
        exact
        path={routes.admin.users}
        hasRole={roles.admin}
        component={UsersPage}
      ></PrivateRoute>

      <Route path="*" component={NotFoundPage}></Route>
    </Switch>
  );
};

export default AppRouter;
