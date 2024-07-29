import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

function Layout() {
  return (
    <div className="layout-container">
      <NavigationBar />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
