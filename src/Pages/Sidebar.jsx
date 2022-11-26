import React, { useState, useEffect } from "react";
import "../Styles/Sidebar.css";
import { IoSunny } from "react-icons/io5";
import { ImPacman } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import { Config } from "../Config/Config";

function Sidebar() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const Token = localStorage.getItem("react-app-token");
    const role = localStorage.getItem("role");
    setToken(Token);
    setRole(role);
  }, []);

  async function Logout() {
    try {
      const result = await axios.post(`${Config.api}/user/logout`, { token });
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
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
            {role == "admin" || role == "user" || role == "viewer" ? (
              <div className="mode-icon-head">
                <BiLogOut className="mode-icon-2" onClick={() => Logout()} />
              </div>
            ) : (
              ""
            )}
            <div className="dp-image-head">
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
