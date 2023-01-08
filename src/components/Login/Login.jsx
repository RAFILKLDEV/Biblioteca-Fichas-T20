import { signInWithEmailAndPassword } from "@firebase/auth";
import { async } from "@firebase/util";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../Firebase";
import "./styles.css";

export function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        async function get() {
          await props.setUser(userCredential.user.uid);
          localStorage.setItem("User", userCredential.user.uid);
        }
        get();
        navigate("/home");
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });
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
            autoComplete="on"
          />
        </div>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}
