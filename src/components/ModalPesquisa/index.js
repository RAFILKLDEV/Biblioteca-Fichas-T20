import './modal-pesquisa.css';

const ModalPesquisa = ({mostrar, esconderModal}) => {
   
   
   return(
      <div className={`modal__fundo ${mostrar ? 'mostrar' : ''}`} onClick={esconderModal}>
      <div className={`modal__pesquisa ${mostrar ? 'mostrar' : ''}`}>
         <input type={'radio'} />
         <button>Pesquisar</button>
         <button onClick={esconderModal}>Cancelar</button>
      </div>
      </div>
   )
}

export default ModalPesquisa;