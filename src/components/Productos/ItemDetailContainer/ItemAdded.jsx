import React from 'react';
import { Link } from 'react-router-dom';
import "./ItemAdded.scss"
const ItemAdded = ({set}) => {
    return (
        <div className="productoAgregado">
            <h3>Producto agregado</h3>
            <button onClick={() => set(true)}>Modificar cantidad</button>
            <Link to="/cart">
                <button>Finalizar compra</button>
            </Link>
        </div>
    );
}

export default ItemAdded;
