import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Config } from "./Config/Config";

export const MyContext = createContext("");

const AppContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [userRole, setUserRole] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     setUser(JSON.parse(localStorage.getItem("user")));
  //     setIsAuthenticated(true);
  //   }
  //   if (isAuthenticated && user) {
  //     fetch(`${Config.api}/user/auth`, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setUserRole(data.role));
  //   }
  // }, [isAuthenticated]);

  useEffect(() => {
    const lrole = localStorage.getItem("role");
    if (
      lrole == "admin" ||
      lrole == "user" ||
      userRole == "admin" ||
      userRole == "user"
    ) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default AppContext;
