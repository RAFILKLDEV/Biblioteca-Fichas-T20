import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRef } from "react";
import { useState } from "react";
import { auth, dataBase } from "../../Firebase";
import "./styles.css";

export function Register() {
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [password, setPassword] = useState("");

  const apelidoRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const emailRef = useRef();

  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const uid = userCredential.user.uid;
        await setDoc(doc(dataBase, "users", uid), {
          user: {
            apelido: apelido,
            email: email,
          },
        });
        alert("Usuários Cadastrado com Sucesso!");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function testeRegister() {
    if (apelido.length < 3) {
      return alert("Apelido precisa ter no minimo 3 Caracteres");
    }
    if (password === confirmPassword) {
      handleRegister();
      setApelido("")
      setPassword("")
      setConfirmPassowrd("")
    } else {
      setPassword("");
      setConfirmPassowrd("");
      alert("Senhas não conferem");
      return setConfirmPassowrd("");
    }
  }

  return (
    <div className="Register">
      <div className="Form-Container">
        <h2>Register</h2>
        <div>
          <div className="Form-Title">Apelido:</div>
          <input
            ref={apelidoRef}
            type="text"
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
          />
        </div>
        <div>
          <div className="Form-Title">E-mail:</div>
          <input
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="Form-Title">Senha:</div>
          <input
            ref={passwordRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          />
        </div>
        <div>
          <div className="Form-Title">Confirme a Senha:</div>
          <input
            ref={confirmPasswordRef}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassowrd(e.target.value)}
            autoComplete="on"
          />
        </div>
        <button onClick={testeRegister}>Registrar</button>
      </div>
    </div>
  );
}
