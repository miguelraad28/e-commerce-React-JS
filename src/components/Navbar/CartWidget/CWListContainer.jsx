import {React, useContext} from 'react';
import { CarritoContext } from '../../../context/CarritoContext';
import CWItem from './CWItem';

const CWListContainer = () => {
    const {carrito} = useContext(CarritoContext);
    return (
        <div className='contenedorCWListContainer'>
            {carrito.map(productoEnCarrito => <CWItem key={productoEnCarrito.id} {...productoEnCarrito}/>)}
        </div>
    );
}

export default CWListContainer;
