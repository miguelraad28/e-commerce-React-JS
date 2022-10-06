import React from 'react';
import { Link } from 'react-router-dom';
import "./ItemAdded.scss"
const ItemAdded = ({set}) => {
    //En ItemAdded tenemos un mensaje de producto agregado, un boton de Modificar cantidad que nos vuelve a mostrar el ItemCount modificando el valor booleano del set que nos cambia la respuesta del ternario en ItemDetail, y un boton de Finalizar Compra que nos lleva al cart view /carrito
    return (
        <div className="productoAgregado">
            <h4>Producto agregado</h4>
            <button onClick={() => set(true)}>Modificar cantidad</button>
            <Link to="/carrito">
                <button>Finalizar compra</button>
            </Link>
        </div>
    );
}

export default ItemAdded;
