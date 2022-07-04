
//clave es la key del local storage donde se guarda la informacion que se pasa con el segundo parametro
export const GuardarEnStorage = (clave, elemento) => {
    //conseguir elementos del local storage
    let elementos = JSON.parse(localStorage.getItem(clave))
    
    //comprobar si es array
    if (Array.isArray(elementos)){
      //Añadir elemento nuevo
      elementos.push(elemento)

    } else{
      //crear array con la nueva peli
      elementos = [elemento]
    }
    //añadir elemento
    localStorage.setItem(clave, JSON.stringify(elementos))
    //devolver objeto
    return elemento
  }