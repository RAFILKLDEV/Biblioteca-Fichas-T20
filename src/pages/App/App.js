import Header from "../../components/Header/Header";
import { Main } from "../../components/Main";
import "./App.css";

export function App(props) {
  if (!props.user) {
    props.setUser(localStorage.getItem("User"));
  }
  return (
    <div className="App">
      <Header user={props.user} />
      <Main user={props.user} />
    </div>
  );
}
