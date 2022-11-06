import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../Main/LayoutMain";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [{ path: "/", element: <Login /> }],
  },
]);
