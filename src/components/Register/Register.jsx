import React from "react";
import { useState } from "react";
import { Navigate } from "react-router";
import "./styles.css";

export function Register() {
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleRegister() {
    if (password === confirmPassword) {
      console.log("Registrou");
    } else console.log("Informações não Conferem");
  }

  return (
    <div className="Register">
      <div className="Form-Container">
        <h2>Register</h2>
        {error && <div>Informações não conferem.</div>}
        <div>
          <div className="Form-Title">Apelido:</div>
          <input
            type="text"
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
          />
        </div>
        <div>
          <div className="Form-Title">E-mail:</div>
          <input
            type="email"
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
        <div>
          <div className="Form-Title">Confirme a Senha:</div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassowrd(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Registrar</button>
      </div>
    </div>
  );
}
