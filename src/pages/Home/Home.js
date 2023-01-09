import Header from "../../components/Header/Header";
import { Main } from "../../components/Main";
import "./Home.css";

export function Home(props) {
  return (
    <div className="Home">
      <Header uid={props.uid} setUser={props.setUser} />
      <Main user={props.user} />
    </div>
  );
}
