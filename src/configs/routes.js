import { lazy } from "react";
import {
  GUARD_SHOULD_AUTH,
  GUARD_SHOULD_NOT_AUTH, 
} from "./enums";  

export const paths = {
  home: {
    root: "/",
  },
  login: {
    root: "/login",
  },
 
};

function routes() { 
  return [
    {
      title: "Login",
      icon: "",
      path: paths.login.root,
      exact: true,
      component: () => lazy(() => import("pages/login")),
      guard: GUARD_SHOULD_NOT_AUTH,
      places: [],
    },
    {
      title: "DashBoard",
      icon: "",
      path: paths.home.root,
      exact: true,
      component: () => lazy(() => import("pages/dashboard")),
      guard: GUARD_SHOULD_AUTH,
      places: [], 
    } 
  ];
}

 

export default routes;
