import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';
import Detalles from '../components/Detalles';

function Details() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`https://mindhub-xj03.onrender.com/api/amazing`)
      .then(response => {
        const event = response.data.events.find(event => event._id == id);
        setEvent(event);
      })
      .catch(error => {
        console.error("Error al cargar los detalles del evento:", error);
      });
  }, [id]);
  
  return (
    <Layout>
      {event ? (
        <Detalles event={event} />
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}

export default Details;
