import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css';

function Carrusel({ imagen, titulo }) {
  const location = useLocation();
  const navigate = useNavigate();

  const redirigirSiguiente = () => {
    if (location.pathname === '/') {
      navigate('/upcoming');
    } else if (location.pathname === '/upcoming') {
      navigate('/past');
    } else if (location.pathname === '/past') {
      navigate('/contact');
    } else if (location.pathname === '/contact') {
      navigate('/stats');
    } else if (location.pathname === '/stats') {
      navigate('/');
    }
  };

  const redirigirAnterior = () => {
    if (location.pathname === '/') {
      navigate('/stats');
    } else if (location.pathname === '/upcoming') {
      navigate('/');
    } else if (location.pathname === '/past') {
      navigate('/upcoming');
    } else if (location.pathname === '/contact') {
      navigate('/past');
    } else if (location.pathname === '/stats') {
      navigate('/contact');
    }
  };

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade py-5">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imagen} className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h2 className="text-3d"><strong>{titulo}</strong></h2>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" onClick={redirigirAnterior}>
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={redirigirSiguiente}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel;
