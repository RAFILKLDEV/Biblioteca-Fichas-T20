import React from "react";
import { Navigate } from "react-router-dom";
import { Login } from "../../components/Login/Login";
import { Register } from "../../components/Register/Register";
import "./styles.css";

export function LoginPage() {
  if (localStorage.getItem("User")) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="LoginPage">
      <Login />
      <Register />
    </div>
  );
}
