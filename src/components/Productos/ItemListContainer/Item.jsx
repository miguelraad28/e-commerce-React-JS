import React from 'react';
import "./Item.scss"
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    // Desestructuración del producto para el luego llamado de las propiedades del objeto para la impresión de la card.
    const {id, nombre, precioUnidad, stock, img} = producto
    return (
        <div className='item' id={id}>
            <div className='infoItem'>
                {/* Por aca tenemos un ternario validando que si el stock es < 1, mostramos un div absolute por sobre la info del producto, haciendo saber que está agotado.*/}
                {stock > 0 ? null : <div className="productoAgotado">Agotado</div>}
                <img src={img}/>
                <h2>{nombre}</h2>
                <p>Precio: ${precioUnidad}</p>
                <p>Disponibles: {stock}</p>
            </div>
            <div className='botonDetail'>
                {/*El boton Ver más detalles te direcciona al Params id, el cual es el id de firestore automatico del documento (producto / objeto.)*/}
                <Link to={`/producto/${id}`}>
                    <button>Ver más detalles</button>
                </Link>
            </div>
        </div>
    );
}

export default Item;
