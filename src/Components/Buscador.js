import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState("")
  const [noEncontrado, setNoEncontrado] = useState(false)

  const buscarPeli = (e) => {
    //crear estado y actualizarlo
    
    setBusqueda(e.target.value)
    
    //Listado completo de peliculas 

    //filtrar para buscar coincidencias
    let pelisEncontradas = listadoState.filter(peli => {
     
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());

    })
   
    if ( pelisEncontradas <= 0 ) {
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"))
      setNoEncontrado(true)
    } else{
      setNoEncontrado(false)
    }
  
  
    setListadoState(pelisEncontradas)
    //Actualizar el estado del listado ppal con lo que he logrado filtrar

  }


  return (

    <div className="search">
    <h3>Buscador: {busqueda}</h3>
    {(noEncontrado ==true && busqueda.length >= 1) && (
      <span className="no-encontrado">No se ha encontrado ninguna coincidencia</span>
    )}
    
    <form>
      <input type="text" id="search-field" name="busqueda" autoComplete='off' onChange={buscarPeli}/>
      <button>Buscar</button>
    </form>
  </div>
    
  )
}
