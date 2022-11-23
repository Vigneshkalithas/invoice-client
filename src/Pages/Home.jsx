import React from "react";
import Sidebar from "./Sidebar";
import "../Styles/Home.css";
import Invoice from "./Invoice";

function Home() {
  return (
    <>
      <div className="home-head">
        <Sidebar />
        <Invoice />
      </div>
    </>
  );
}

export default Home;
