import "./header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalPesquisa from "../ModalPesquisa";

const Header = (props) => {
  const [mostrar, setMostrar] = useState(false);
  const [estadoMenu, setEstadoMenu] = useState("fechado");

  console.log(props.user);

  useEffect(() => {
    mostrar === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [mostrar]);

  function mudaEstadoMenu(estadoMenu) {
    estadoMenu === "fechado"
      ? setEstadoMenu("aberto")
      : setEstadoMenu("fechado");
  }

  function mostraModal() {
    setMostrar(true);
  }

  return (
    <header className={"header"}>
      <div className={"header__logo"}>
        <Link to="/">T20</Link>
        <p className={"logo__nome"}>Nome do Projeto</p>
      </div>
      <div
        className="header__hamburguer"
        onClick={() => mudaEstadoMenu(estadoMenu)}
      >
        <div>Usuario:</div>
        <div>{props.user?.email}</div>
      </div>
      <nav>
        <div className={"header__criador-de-ficha"}>
          <button className={"criador-de-ficha__botao"}>CRIAR NPC</button>
          <button className={"criador-de-ficha__botao"}>CRIAR MONSTRO</button>
        </div>
        <div className={"header__criador-de-ficha"}>
          <button className={"criador-de-ficha__botao"} onClick={mostraModal}>
            Pesquisar
          </button>
          <ModalPesquisa
            mostrar={mostrar}
            esconderModal={() => {
              setMostrar(false);
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
