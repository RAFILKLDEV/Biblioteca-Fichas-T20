import './main.css';
import {useState, useEffect} from 'react';
import ModalPesquisa from '../ModalPesquisa';
import Card from '../Card';

const Main = () => {
   // const quantidadeCartas = [];
   // {for(let i =0; i<20; i++){
   //    quantidadeCartas.push(i);
   // }}

   const [mostrar, setMostrar] = useState(false);

   useEffect(() => {
      mostrar === true ? document.body.style.overflow='hidden' : document.body.style.overflow='unset'
   }, [mostrar])

   function mostraModal(){
      setMostrar(true);
   };

   return(
      <main className={'main'}>
         <section className={'main__pesquisa'}>
            <button onClick={mostraModal}>Pesquisar</button>
            <ModalPesquisa mostrar={mostrar} esconderModal={() => {setMostrar(false)}}  />            
         </section>
         <section className={'main__cartas'}>
            {/* Versão Reduzida */}
            {Array(20).fill("").map((e) => <Card key={e}/>)}
         </section>
      </main>
   )
}

export default Main;