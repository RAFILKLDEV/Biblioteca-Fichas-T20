import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase";
import "./styles.css";

export function Register() {
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }

  return (
    <div className="Register">
      <div className="Form-Container">
        <h2>Register</h2>
        {/* {error && <div>Informações não conferem.</div>} */}
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
