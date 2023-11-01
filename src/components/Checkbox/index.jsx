import './style.css';
function Checkbox(props) {
  const actualizarCheckboxChange = (event) => {
    const categoriaSeleccionada = event.target.value;
    props.onCategoryChange(categoriaSeleccionada);
  };

  const renderCheckboxes = () => {
    return props.categorias.map((categoria) => (
      <div key={categoria} className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={categoria}
          onChange={actualizarCheckboxChange}
          id={`checkbox-${categoria}`}
        />
        <label className="form-check-label text-white" htmlFor={`checkbox-${categoria}`}>
          <strong>{categoria}</strong>
        </label>
      </div>
    ));
  };

  return (
    <div className="col-12 col-lg-9">
      <div id="category-checkboxes" className="d-flex flex-column flex-md-row align-items-center">
        {renderCheckboxes()}
      </div>
    </div>
  );
}

export default Checkbox;

