import "./modal-pesquisa.css";

const ModalPesquisa = ({ mostrar, esconderModal }) => {
  return (
    <div
      className={`modal__fundo ${mostrar ? "mostrar" : ""}`}
      onClick={esconderModal}
    >
      <div className={`modal__pesquisa ${mostrar ? "mostrar" : ""}`}>
        <div className={"pesquisa__campo"}>
          <label htmlFor={"npc"}>NPC</label>
          <input type={"radio"} id={"npc"} />
        </div>
        <div className={"pesquisa__campo"}>
          <label htmlFor={"monster"}>Monstro</label>
          <input type={"radio"} id={"monster"} />
        </div>
        <button>Pesquisar</button>
        <button onClick={esconderModal}>Cancelar</button>
      </div>
    </div>
  );
};

export default ModalPesquisa;
