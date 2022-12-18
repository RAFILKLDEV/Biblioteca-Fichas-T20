import React from "react";
import { Login } from "../../components/Login/Login";
import { Register } from "../../components/Register/Register";
import "./styles.css";

export function LoginPage(props) {
  return (
    <div className="LoginPage">
      <Login setUser={props.setUser} />
      <Register />
    </div>
  );
}
