function SelectByOrder({ setOrderAlpha, setCurrentPage }) {
  const handleSortAlpha = e => {
    setOrderAlpha(e.target.value);
    setCurrentPage(1);
    console.log(e.target.value);
  };

  return (
    <div>
      <h3>Ordenar por:</h3>
      <div>
        <label>Orden alfabetico</label>
        <select onChange={handleSortAlpha}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      <div>
        <label>Orden por peso</label>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
}

export default SelectByOrder;
