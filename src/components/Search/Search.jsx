export function Search(props) {
  return (
    <div className="Search">
      <div className="Search-Title">Pesquisa</div>
      <input
        type="text"
        value={props.search.search}
        onChange={(e) => props.search.setSearch(e.target.value)}
      />
      <select
        value={props.bars.mode}
        onChange={(e) => {
          props.bars.setMode(e.target.value);
          props.bars.setSelect("Todos");
        }}
      >
        <option value="Npcs">Npcs</option>
        <option value="Monstros">Monstros</option>
      </select>

      {props.bars.mode === "Npcs" && (
        <select
          value={props.bars.select}
          onChange={(e) => props.bars.setSelect(e.target.value)}
        >
          <option>Todos</option>
          <option>Lacaio</option>
          <option>Solo</option>
          <option>Especial</option>
        </select>
      )}

      {props.bars.mode === "Monstros" && (
        <select
          value={props.bars.select}
          onChange={(e) => props.bars.setSelect(e.target.value)}
        >
          <option>Todos</option>
          <option>Ermos</option>
          <option>Caverna</option>
          <option>Especial</option>
        </select>
      )}
    </div>
  );
}
