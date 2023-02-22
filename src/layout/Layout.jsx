import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import MainPage from "../components/mainside/MainPage";
import { Link, Switch, Route } from "react-router-dom";

import "./style.css";

const Layout = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <MainPage />
    </div>
  );
};

export default Layout;
