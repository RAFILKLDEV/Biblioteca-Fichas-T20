import { Header } from "../../components/Header/Header";
import "./styles.css";

export function NotFound(props) {
  return (
    <>
      <Header user={props.user} setUser={props.setUser} />
      <div className="NotFound">
        Lamentamos o ocorrido, mas ...
        <br />O Bibliotecário não encontrou essa referência.
      </div>
    </>
  );
}
