import {React, useContext} from 'react';
import CarritoItem from './CarritoItem';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import "./CarritoListContainer.scss"
import CarritoVacio from './CarritoVacio';
const CarritoListContainer = () => {
    const {carrito} = useContext(CarritoContext)
    return (
        <div className="contenedorListCarrito">
            <h1>Carrito de compras</h1>
            {carrito.length > 0 ? <>
            <div className="listaCarrito">
                {carrito.map(productoEnCarrito => <CarritoItem {...productoEnCarrito}/>)}
            </div>
            <div className="botonCheckout">
                <Link to="/checkout">
                    <button>Finalizar compra</button>
                </Link>
            </div>
            </> : <CarritoVacio/>}
        </div>
    );
}

export default CarritoListContainer;
