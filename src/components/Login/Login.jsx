import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase";
import "./styles.css";
import { createUserWithEmailAndPassword } from "@firebase/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useCreateUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDafault();
    createUserWithEmailAndPassword(email, password);
  }

  return (
    <div className="Login">
      <div className="Form-Container">
        <h2>Login</h2>
        {/* {error && <div>Informações não conferem.</div>} */}
        <div>
          <div className="Form-Title">E-mail:</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="Form-Title">Senha:</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}
