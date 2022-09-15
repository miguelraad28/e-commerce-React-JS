import {React, useContext} from 'react';
import CarritoItemList from './CarritoItemList';
import { CarritoContext } from '../../context/CarritoContext';
import "./CarritoListContainer.scss"
import CarritoVacio from './CarritoVacio';
const CarritoListContainer = () => {
    const {carrito} = useContext(CarritoContext)
    return (
        <div className="contenedorListCarrito">
            <h1>Carrito de compras</h1>
            {carrito.length > 0 ? <CarritoItemList/> : <CarritoVacio/>}
        </div>
    );
}

export default CarritoListContainer;
