import './header.css';

const Header = () => {
   return(
      <header className={'header'}>
         <div className={'header__logo'}>LOGO</div>
         <div className={'header__criador-de-ficha'}>
            <div className={'criador-de-ficha__npc'}>CRIAR NPC</div>
            <div className={'criador-de-ficha__monstro'}>CRIAR MONSTRO</div>
         </div>
      </header>
   )
}

export default Header;
