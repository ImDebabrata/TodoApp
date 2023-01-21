import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Todos from "./Todos";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};

export default AllRoute;
