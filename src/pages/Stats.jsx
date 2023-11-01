import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Layout from '../layouts/Layout';
import Carrusel from '../components/Carrusel';
import Table from '../components/Table'; // Importa el componente Table desde su archivo

function Stats({ rutaActual, imagen, titulo }) {
  const [eventsData, setEventsData] = useState([]);
  const [pastEventsData, setPastEventsData] = useState([]);

  useEffect(() => {
    Axios.get(`https://mindhub-xj03.onrender.com/api/amazing`)
      .then(response => {
        const events = response.data.events;
        setEventsData(events);
        const pastEvents = events.filter(event => event.assistance);
        setPastEventsData(pastEvents);
      })
      .catch(error => {
        console.error("Error al cargar los datos de los eventos:", error);
      });
  }, []);

  return (
    <Layout>
      <Carrusel imagen={imagen} titulo={titulo} />
      <Table eventsData={eventsData} pastEventsData={pastEventsData} />
    </Layout>
  );
}

export default Stats;



    