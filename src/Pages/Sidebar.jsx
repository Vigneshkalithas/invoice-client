import React from "react";
import "../Styles/Sidebar.css";
import { IoSunny } from "react-icons/io5";
import { ImPacman } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  function Logout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <>
      <div className="sidebar-head">
        <div className="sidebar">
          <div className="logo">
            <ImPacman />
          </div>
          <div className="dp-switch">
            <div className="mode-icon-head">
              <IoSunny className="mode-icon" />
            </div>
            <div className="dp-image-head" onClick={() => Logout()}>
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="user-dp-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
