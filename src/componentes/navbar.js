import React from "react";
import "../estilos/navbar.css"

function NavBar(){
    return(

        <div className="contenedor-principal-navbar">

            <div className="logo">
                <p>FamGonNan</p>
            </div>

            <div className="navLinks">
                <ul className="list-item">
                   <li className="item">
                        <a href="#" className="links">Inicio</a>
                    </li> 
                   <li className="item">
                        <a href="#" className="links">Hijos</a>
                    </li> 
                   <li className="item">
                        <a href="#" className="links">Sobre Mi</a>
                    </li> 
                </ul>
            </div>
            
        </div>

    )
}

export default NavBar;