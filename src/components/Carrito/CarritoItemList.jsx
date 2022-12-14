import {React, useContext} from 'react';
import CarritoItem from "./CarritoItem.jsx"
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import "./CarritoItemList.scss"


const CarritoItemList = () => {
    const {carrito, vaciarCarrito, totalDeCarrito} = useContext(CarritoContext);
    return (
        <div>
            {carrito.map(productoEnCarrito => <CarritoItem key={productoEnCarrito.id} {...productoEnCarrito}/>)}
            <div className='contenedorBotonesCarrito'>
                <button className="botonRojoCarrito" onClick={vaciarCarrito}>Vaciar carrito</button>
                <Link to="/checkout">
                    <button className="botonRosaCarrito">Ir a pagar</button>
                </Link>
            </div>
            <div className='totalDeCarrito'>
                <p>Total a pagar: ${totalDeCarrito}</p>
            </div>
        </div>
    );
}

export default CarritoItemList;
