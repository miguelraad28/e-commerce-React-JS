import React from 'react';
import UseItemCount from '../../../Hooks/UseItemCount';
import "./ItemCount.scss"
const ItemCount = ({stock, onAdd}) => {
    //Desestructuracion del customHook
    const {sumar, restar, count} = UseItemCount(stock)
    return (
        <div className='divBotonesAgregar'>
            <button className='botonRestarProducto' onClick={restar}>-</button>
            <input type="number" name="" id="" value={count}/>
            <button className="botonSumarProducto" onClick={sumar}>+</button>
            <button className='botonAgregarAlCarrito botonSumarProducto' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
