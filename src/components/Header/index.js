import './header.css';
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import ModalPesquisa from "../ModalPesquisa";



const Header = () => {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    mostrar === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [mostrar]);

  function mostraModal() {
    setMostrar(true);
  }

   return(
      <header className={'header'}>
         <div className={'header__logo'}>
            <Link to="/">T20</Link>
            <p className={'logo__nome'}>Nome do Projeto</p>
         </div>
         <div className={'header__criador-de-ficha'}>
            <button className={'criador-de-ficha__botao'}>CRIAR NPC</button>
            <button className={'criador-de-ficha__botao'}>CRIAR MONSTRO</button>       
         </div>
         <div className={'header__criador-de-ficha'}>
            <button className={'criador-de-ficha__botao'} onClick={mostraModal}>Pesquisar</button>
         <ModalPesquisa
            mostrar={mostrar}
            esconderModal={() => {
               setMostrar(false);
            }}
         />
         </div>

      </header>
   )
}

export default Header;
