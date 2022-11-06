import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const LayoutMain = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutMain;
