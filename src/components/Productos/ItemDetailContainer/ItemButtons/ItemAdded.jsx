import React from 'react';
import { Link } from 'react-router-dom';
import "./ItemAdded.scss"
const ItemAdded = ({set}) => {
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
