import React from "react";
import { Outlet } from "react-router-dom";
// import { SideBar } from "./Sidebar/SideBar";
import Sidebar from "./Pages/Sidebar";
// import { Navbar } from "./Navbar/Navbar";

export function Layout() {
  return (
    <div className="App-child">
      <Sidebar />
      <Outlet />
    </div>
  );
}

// .App-child{
//   display: flex;
//   flex-direction: row;
// }

// .top-nav{
//   width:100vw;

// }
