import {React, useContext} from 'react';
import { CarritoContext } from '../../../context/CarritoContext';
import "./CWItem.scss";

const CWItem = ({id, nombre, precioUnidad, cantidad, precioTotal, img}) => {
    const {eliminarProductoCarrito} = useContext(CarritoContext);
    return (
        <div className="contenedorCWItem" id={id}>
            <div>
                <img className="imagenCW" src={img}/>
            </div>
            <div className="detallesCW">
                <p className="tituloCW">{nombre}</p>
                <p>Cantidad: {cantidad} - Precio: ${precioUnidad}</p>
                    <p>Total: ${precioTotal}</p>
            </div>
            <div className='botonEliminar'>
                <button onClick={() => eliminarProductoCarrito(id)}>X</button>
            </div>
        </div>
    );
}

export default CWItem;
