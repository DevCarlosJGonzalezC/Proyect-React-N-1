import React from "react";
import '../estilos/footer.css'

function Footer(props){
    return(
        <div className="Footer-contenedor-principal" >
            <h2 className="informacion">Perfil profesional.</h2>
                <div className="left">
                <p className="escuela">{props.escuela1}</p>
                <p className="escuela">{props.escuela2}</p>
                <p className="escuela">{props.escuela3}</p>

                </div>
                <div className="right">
                <p className="profesion">{props.profesion1}</p>
                <p className="profesion">{props.profesion2}</p>
                <p className="profesion">{props.profesion3}</p>

                </div>
            <h4 className="creado">{props.creador}</h4>
        </div>
    )
}

export default Footer;