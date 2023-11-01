import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Details from './pages/Details';
import Stats from './pages/Stats';
import Error from './components/Error'; // Importa Error como un componente

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home rutaActual="home" imagen="./src/assets/img/1.jpg" titulo="HOME" />}/>
        <Route path='/upcoming' element={<Home rutaActual="upcoming" imagen="./src/assets/img/2.jpg" titulo="UPCOMING EVENTS" />} />
        <Route path='/past' element={<Home rutaActual="past" imagen="./src/assets/img/3.jpg" titulo="PAST EVENTS" />} />
        <Route path='/contact' element={<Contact rutaActual="contact" imagen="./src/assets/img/4.jpg" titulo="CONTACT" />} />
        <Route path='/stats' element={<Stats rutaActual="stats" imagen="./src/assets/img/5.jpg" titulo="STATS" />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />  {/* Usa el componente Error aquí */}
      </Routes>
    </Router>
  );
}

export default App;
