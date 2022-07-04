import React from 'react'
import { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

export const Crear = ({setListadoState}) => {

  const [peliState, setPeliState] = useState({
    titulo:"",
    descripcion: ""
  })

  const tituloComponente = "Añadir Película"

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    //Conseguir datos formulario

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //crear objeto de la pelicula a guardar

    let peli = {
      id: new Date().getTime(),
      titulo: titulo,
      descripcion: descripcion
    }
   //Guardar Estado
    setPeliState(peli)

    //Actualizar estado del componente App
    setListadoState(elementos => {
      return [...elementos, peli]
    })

    //Mandar el estado al local storage
    GuardarEnStorage("pelis", peli)
  }

  

  const { titulo, descripcion } = peliState;

  return (


    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
   {(titulo && descripcion) && <strong>{"Has creado la películo: " + titulo}</strong>}
      <form onSubmit={conseguirDatosForm}>

        <input type="text"
          id="titulo"
          name="titulo"
          placeholder="título" >
        </input>

        <textarea placeholder="descripcion"
          id="descripcion"
          name="descripcion"></textarea>

        <input type="submit"
          value="Guardar"
          id="save">
        </input>

      </form>
    </div>


  )
}
