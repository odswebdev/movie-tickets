import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Theater from "./pages/Theater";
import Seat from "./pages/Seat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/theater" element={<Theater />} />
      <Route path="/seat" element={<Seat />} />
    </Routes>
  );
}

export default App;
