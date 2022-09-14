import React from 'react';
import { Link } from 'react-router-dom';
import "./CarritoVacio.scss"

const CarritoVacio = () => {
    return (
        <div className="carritoVacio">
            <h3>
                El carrito está vacío...
            </h3>
            <Link to="/productos">
                <button className="irAComprarButton"> Ir a comprar</button>
            </Link>
        </div>
    );
}

export default CarritoVacio;
