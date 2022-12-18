import React from "react";
import { useState } from "react";
import { Navigate } from "react-router";
import "./styles.css";

export function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  function handleLogin() {
    Navigate("/home");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
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
        <div>
          <div className="Form-Title">Confirme a Senha:</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Registrar</button>
      </div>
    </div>
  );
}
