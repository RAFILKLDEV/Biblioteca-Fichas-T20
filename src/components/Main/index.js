import './main.css';
import {useState} from 'react';
import ModalPesquisa from '../ModalPesquisa';

const Main = () => {
   const [mostrar, setMostrar] = useState(false);

   function mostraModal(){
      setMostrar(true);
   };

   return(
      <main className={'main'}>
         <section className={'main__pesquisa'}>
            <button onClick={mostraModal}>Pesquisar</button>
            <ModalPesquisa mostrar={mostrar} esconderModal={() => {setMostrar(false)}}  />
         </section>
      </main>
   )
}

export default Main;