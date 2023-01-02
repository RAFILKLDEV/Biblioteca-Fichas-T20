import Header from "../../components/Header/Header";
import { Main } from "../../components/Main";
import "./Home.css";

export function Home(props) {
  return (
    <div className="Home">
      <Header user={props.user} />
      <Main user={props.user} />
    </div>
  );
}
