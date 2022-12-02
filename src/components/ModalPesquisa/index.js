import './modal-pesquisa.css';

const ModalPesquisa = ({mostrar, esconderModal}) => {
   
   
   return(
      <div className={`modal-pesquisa ${mostrar ? 'mostrar' : ''}`}>
         <button onClick={esconderModal}>Cancelar</button>
      </div>
   )
}

export default ModalPesquisa;