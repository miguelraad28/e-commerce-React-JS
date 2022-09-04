import React from 'react';
import "./Item.scss"
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precioUnidad, stock, img}) => {
    return (
        <div className='item' id={id}>
            <div className='infoItem'>
                <img src={img}/>
                <h2>{nombre}</h2>
                <p>Precio: ${precioUnidad}</p>
                <p>Disponibles: {stock}</p>
            </div>
            <div className='botonDetail'>
                <Link to={`/productos/${id}`}>
                    <button>Ver más detalles</button>
                </Link>
            </div>
        </div>
    );
}

export default Item;
