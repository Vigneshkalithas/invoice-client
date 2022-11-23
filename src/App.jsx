import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Sidebar from "./Pages/Sidebar";
import Invoice from "./Pages/Invoice";
import Details from "./Pages/Details";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Invoice />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
