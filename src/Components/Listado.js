import React, { useEffect, useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

  //const [listadoState, setListadoState] = useState([])

  const [editar, setEditar] = useState(0)

  //Que conseguirPeliculas se ejecute cuando se carga el componente

  useEffect(() => {
    conseguirPeliculas();
  }, [])

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas)
    return peliculas
  }

  const borrarPeli = (id) => {
    //Conseguir peliculas almacenadas
    let pelisAlmacenadas = conseguirPeliculas(); //las saca del local storage
    //Filtrar las peliculas para que elimine la que no quiero
    let nuevoListadoParaGuardar = pelisAlmacenadas.filter((peli) => {
      return peli.id !== parseInt(id);
    })
    //actualizar el estado del Listado y de APP
    setListadoState(nuevoListadoParaGuardar);
    //actualizar los datos del localstorage
    localStorage.setItem("pelis", JSON.stringify(nuevoListadoParaGuardar))
  }

  return (


    <>
      {listadoState.length == 0 ?
        <h2>No hay películas para mostrar, introduzca alguna</h2>
        :
        (listadoState.map(peli => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

            {/* Formulario de edicion */}

            {editar === peli.id && (

              <Editar peli={peli}
                      conseguirPeliculas={conseguirPeliculas}
                      setEditar={setEditar}
                      setListadoState={setListadoState}/>

            )


            }

             
            </article>
          )
        }))
      }


    </>
  )
}
