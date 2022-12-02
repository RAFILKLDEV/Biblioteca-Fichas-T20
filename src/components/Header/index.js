import './header.css';

const Header = () => {
   return(
      <header className={'header'}>
         <div className={'header__logo'}></div>
         <div className={'header__criador-de-ficha'}>
            <div className={'criador-de-ficha__npc'}></div>
            <div className={'criador-de-ficha__monstro'}></div>
         </div>
      </header>
   )
}

export default Header;
