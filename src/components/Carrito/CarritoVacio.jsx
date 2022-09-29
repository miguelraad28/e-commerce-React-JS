import React from 'react';
import { Link } from 'react-router-dom';
import "./CarritoVacio.scss"

const CarritoVacio = () => {
    return (
        <div className="carritoVacio">
            <h3>
                El carrito está vacío...
            </h3>
            <div className='contenedorBotonRosaCarrito'>
                <Link to="/">
                    <button className="botonRosaCarrito"> Ir a comprar</button>
                </Link>
            </div>
        </div>
    );
}

export default CarritoVacio;
