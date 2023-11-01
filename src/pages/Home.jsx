import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Carrusel from '../components/Carrusel';
import Checkbox from '../components/Checkbox';
import Search from '../components/Search';
import Card from '../components/Card';
import Layout from '../layouts/Layout';

function Home({ rutaActual, imagen, titulo }) {
  const [eventos, setEventos] = useState([]);
  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get('https://mindhub-xj03.onrender.com/api/amazing')
      .then((response) => {
        const allEvents = response.data.events;
        if (rutaActual === 'upcoming') {
          const upcomingEvents = allEvents.filter((evento) => evento.estimate !== undefined);
          setEventos(upcomingEvents);
          setEventosFiltrados(upcomingEvents);
        } else if (rutaActual === 'past') {
          const pastEvents = allEvents.filter((evento) => evento.assistance !== undefined);
          setEventos(pastEvents);
          setEventosFiltrados(pastEvents);
        } else {
          setEventos(allEvents);
          setEventosFiltrados(allEvents);
        }
        setLoading(false);
      });
  }, [rutaActual]);

  const actualizarCategoriasSeleccionadas = (categoriaSeleccionada) => {
    if (categoriasSeleccionadas.includes(categoriaSeleccionada)) {
      setCategoriasSeleccionadas((prevCategorias) => prevCategorias.filter((categoria) => categoria !== categoriaSeleccionada));
    } else {
      setCategoriasSeleccionadas((prevCategorias) => [...prevCategorias, categoriaSeleccionada]);
    }
  };

  const manejarCambioDeBusqueda = (textoBusqueda) => {
    setBusqueda(textoBusqueda);
  };

  const eventosAMostrar = eventosFiltrados.filter((evento) => {
      const categoriaMatch = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category);
      const busquedaMatch = evento.name.toLowerCase().includes(busqueda);
      return categoriaMatch && busquedaMatch;
    });

    const categoriasUnicas = [...new Set(eventosFiltrados.map((evento) => evento.category))];

  return (
    <>
      <Layout>
      <Carrusel imagen={imagen} titulo={titulo} />
        <div className="container-fluid mt-5">
          <div className="row">
            <Checkbox onCategoryChange={actualizarCategoriasSeleccionadas} categorias={categoriasUnicas} />
            <Search onSearch={manejarCambioDeBusqueda} />
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <section className="container py-3 mt-3">
            <div id="event-container" className="row g-4">
              {eventosAMostrar.map((evento) => (
                <Card
                  id={evento._id}
                  title={evento.name}
                  description={evento.description}
                  price={evento.price}
                  image={evento.image}
                />
              ))}
            </div>
          </section>
        )}
      </Layout>
    </>
  );
}

export default Home;
