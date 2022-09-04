import React from 'react';
import "./ItemDetail.scss"

const ItemDetail = ({id, nombre, descripcion, precioUnidad, stock, img}) => {
    return (
        <div className='itemDetailGrid'>
            <div className='divImg'>
                <img src={`.${img}`}/>
            </div>
            <div className='divDetailsAndButton'>
                <div className='divDetails'>
                    <h2>{nombre}</h2>
                    <p className='itemDescripcion'>{descripcion}</p>
                    <p>Precio: ${precioUnidad}</p>
                    <p>Disponibles: {stock}</p>
                </div>
                <div className='divBotonesAgregar'>
                    <></>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
