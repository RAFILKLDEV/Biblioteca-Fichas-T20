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
        onChange={(e) => props.bars.setMode(e.target.value)}
      >
        <option value="Npcs">Npcs</option>
        <option value="Monstros">Monstros</option>
      </select>

      {props.bars.mode === "Npcs" && (
        <select
          value={props.bars.select}
          onChange={(e) => props.bars.setSelect(e.target.value)}
        >
          <option value="-//-">Todos</option>
          <option value="Todos">Lacaio</option>
          <option value="Todos">Solo</option>
          <option value="Todos">Especial</option>
        </select>
      )}

      {props.bars.mode === "Monstros" && (
        <select
          value={props.bars.select}
          onChange={(e) => props.bars.setSelect(e.target.value)}
        >
          <option value="-//-">Todos</option>
          <option value="Todos">Ermos</option>
          <option value="Todos">Caverna</option>
          <option value="Todos">Especial</option>
        </select>
      )}
    </div>
  );
}
