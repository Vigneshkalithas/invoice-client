import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Sidebar from "./Pages/Sidebar";
import Invoice from "./Pages/Invoice";
import Details from "./Pages/Details";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgetPassword from "./Pages/ForgetPassword";
import Verify from "./Pages/Verify";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Payment from "./Pages/Payment";
import MemberShip from "./Components/MemberShip";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verify/:id" element={<Verify />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/payment" element={<MemberShip />} />
      </Routes>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
