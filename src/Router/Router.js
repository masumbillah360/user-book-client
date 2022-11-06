import { createBrowserRouter } from "react-router-dom";
import LayoutAuth from "../Main/LayoutAuth";
import LayoutMain from "../Main/LayoutMain";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import UserProfie from "../Pages/UserProfile/UserProfie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/signup", element: <Registration /> },
    ],
  },
  {
    path: "/home",
    element: <LayoutAuth />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/home/user", element: <UserProfie /> },
    ],
  },
]);
