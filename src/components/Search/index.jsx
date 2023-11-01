import React, { useState } from 'react';
import './style.css';

function Search(props) {
  const [searchText, setSearchText] = useState(''); // Estado para almacenar el texto de búsqueda

  const manejarBusqueda = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe

    // Llama a la función de búsqueda en el componente padre (Home)
    props.onSearch(searchText.toLowerCase());
  };

  return (
    <div className="col-12 col-lg-3 mt-3 mt-md-0">
      <form className="d-flex align-items-center mb-3" onSubmit={manejarBusqueda}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;

