import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
