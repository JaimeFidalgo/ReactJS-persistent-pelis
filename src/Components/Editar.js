import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState} ) => {

    const tituloComponente = "Editar película"

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        //conseguir el target del evento
        let target = e.target
        
        //Buscar el id del objeto a afctualizar
        const pelisAlmacenadas = conseguirPeliculas()
        const indice= pelisAlmacenadas.findIndex(peli => {
            return peli.id ===id
        })
       //Crear objeto con ese indice. Titulo y descripcion del formulario
       const peliActualizada = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
       }
       //Actualizar el elemento con ese indice
       pelisAlmacenadas[indice] = peliActualizada;

       //Guardar el array nuevo en el localstorage 
       localStorage.setItem("pelis", JSON.stringify(pelisAlmacenadas));
       // actualizar estados
       setListadoState(pelisAlmacenadas);
       setEditar(0)

    }


  return (


    <div className="edit-form">
        <br/>
        <hr/>
        <br/>

        <h3 className="title">{tituloComponente}</h3>
        <form onSubmit = {e => {guardarEdicion(e, peli.id)}}>
            <input 
                type="text" 
                name="titulo" 
                className="titulo-editado" 
                defaultValue={peli.titulo}/>
            <textarea 
                name="descripcion"
                defaultValue={peli.descripcion} 
                className="descripcion-editada">

            </textarea>
            <input 
                type="submit" 
                className="editar" 
                value="Actualizar"/>
        </form>


    </div>
  )
}
