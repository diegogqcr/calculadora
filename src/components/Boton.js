import React from "react";
import '../style/Boton.css'

function Boton(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '='); 
  }

    return(
      <button 
      //`` template literals cadena de caracteres que puede tener js
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </button>
    );
}

export default Boton;