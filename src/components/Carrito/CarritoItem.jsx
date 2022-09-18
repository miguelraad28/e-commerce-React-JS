import {React, useContext} from 'react';
import { products } from '../products';
import "./CarritoItem.scss"
import { CarritoContext } from '../../context/CarritoContext';

const CarritoItem = ({id, nombre, precioUnidad, cantidad, precioTotal, img}) => {
    const {eliminarProductoCarrito} = useContext(CarritoContext);
    return (
        <div className="contenedorProductoEnCarrito" style={{maxWidth: '540px'}} id={id}>
            <div>
                <img className="imagenProductoEnCarrito" src={img}/>
            </div>
            <div className="detallesProductoEnCarrito">
                <h5 className="tituloProductoEnCarrito">{nombre}</h5>
                <h6>Cantidad: {cantidad} - Precio: ${precioUnidad}</h6>
                <h6>Total: ${precioTotal}</h6>
            </div>
            <div className='botonEliminar'>
                <button onClick={() => eliminarProductoCarrito(id)}>X</button>
            </div>
        </div>
    );
}

export default CarritoItem;
