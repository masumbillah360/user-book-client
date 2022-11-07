import { createBrowserRouter } from "react-router-dom";
import LayoutAuth from "../Main/LayoutAuth";
import LayoutMain from "../Main/LayoutMain";
import About from "../Pages/About/About";
import CreatePost from "../Pages/CreatePost/CreatePost";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NewsFeed from "../Pages/NewsFeed/NewsFeed";
import Registration from "../Pages/Registration/Registration";
import UpdateProfile from "../Pages/UserProfile/UpdateProfile";
import UserProfie from "../Pages/UserProfile/UserProfie";
import ViewPost from "../Pages/ViewPost/ViewPost";
import PrivateRoute from "./PrivateRoute";

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
    path: "/user",
    element: (
      <PrivateRoute>
        <LayoutAuth />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/user",
        element: <Home />,
      },
      {
        path: "/user/profile",
        element: <UserProfie />,
      },
      {
        path: "/user/newsfeed",
        element: <NewsFeed />,
      },
      {
        path: "/user/create-post",
        element: <CreatePost />,
      },
      {
        path: "/user/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/user/viewpost",
        element: <ViewPost />,
      },
    ],
  },
]);
