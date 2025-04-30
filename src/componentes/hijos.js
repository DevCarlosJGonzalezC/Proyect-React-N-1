import React from "react";
import "../estilos/Hijos.css"

function Hijos(props){
    return(
        <div className="contenedor-hijos">
            <img 
                className="imagen-hijos"
                src={require(`../imagenes/hijo-${props.imagen}.png`)}
                alt = "Foto luciana" />
            <div className="contenedor-texto-hijos">
                <p className="nombre-hijos">{props.nombre}</p>
                <p className="edad-hijos">{props.edad} <strong>Años</strong></p>
                <p className="edad-hijos">{props.colegio} <strong></strong></p>
                <p className="descripcion-hijos">{props.descripcion}</p>
            </div>

        </div>

    )
}

export default Hijos;