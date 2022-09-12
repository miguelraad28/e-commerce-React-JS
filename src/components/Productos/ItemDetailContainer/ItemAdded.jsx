import React from 'react';
import { Link } from 'react-router-dom';
import "./ItemAdded.scss"
const ItemAdded = () => {
    return (
        <div className="productoAgregado">
            <h3>Producto agregado</h3>
            <Link to="/cart">
                <button>Finalizar compra</button>
            </Link>
        </div>
    );
}

export default ItemAdded;
