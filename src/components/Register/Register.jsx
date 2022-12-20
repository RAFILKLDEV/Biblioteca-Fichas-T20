import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, dataBase } from "../../Firebase";
import "./styles.css";

export function Register() {
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const uid = userCredential.user.uid;
        await setDoc(doc(dataBase, "users", uid), {
          user: {
            apelido: apelido,
            email: email,
          },
        });
        alert("Usuários Cadastrado com Sucesso!");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }

  return (
    <div className="Register">
      <form className="Form-Container">
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
            autoComplete="on"
          />
        </div>
        <div>
          <div className="Form-Title">Confirme a Senha:</div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassowrd(e.target.value)}
            autoComplete="on"
          />
        </div>
        <button onClick={handleRegister}>Registrar</button>
      </form>
    </div>
  );
}
