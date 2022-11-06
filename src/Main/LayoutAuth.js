import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";

const LayoutAuth = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <LeftNav />
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutAuth;
