import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
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
      </header>
   )
}

export default Header;
