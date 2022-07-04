import  {Listado } from './Components/Listado';
import { Buscador } from './Components/Buscador';
import { Crear } from './Components/Crear';
import { useState } from 'react';

function App() {

  const [listadoState, setListadoState] = useState([])

  return (
    <div className="layout">

      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Películas</h1>
      </header>

      {/* Nav */}

      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Películas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido Ppal */}

      <section className="content">
       {/* Listado de peliculas */}
       <Listado listadoState={listadoState} setListadoState={setListadoState}/>
      </section>
      {/* Barra lateral */}
      <aside className="lateral">
       <Buscador listadoState={listadoState} setListadoState={setListadoState}/>
        <Crear setListadoState={setListadoState}/>
      </aside>

      {/* Pie de página */}

      <footer className="footer">
        &copy; React - Jaime Fidalgo Santos - <a href="https://jaime-fidalgo-santos-portfolio.herokuapp.com">web</a>
      </footer>
    </div>
  );
}

export default App;
