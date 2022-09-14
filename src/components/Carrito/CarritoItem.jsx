import {React, useState, useEffect} from 'react';
import { products } from '../products';
import "./CarritoItem.scss"

const CarritoItem = ({id, quantity}) => {
    const [productoEnCarrito, setProductoEnCarrito] = useState({});
    const getProducts = () => new Promise((res, rej) => {
        res(products)
        let auxProductoEnCarrito = (products.find(productoEnCarrito => productoEnCarrito.id === id))
        setProductoEnCarrito(auxProductoEnCarrito)
        return productoEnCarrito
    })
    useEffect(() => {
        getProducts()
    }, );
    const {nombre, img, precioUnidad} = productoEnCarrito
    return (
        <div className="contenedorProductoEnCarrito" style={{maxWidth: '540px'}} id={id}>
            <div>
                <img className="imagenProductoEnCarrito" src={img}/>
            </div>
            <div className="detallesProductoEnCarrito">
                <h5 className="tituloProductoEnCarrito">{nombre}</h5>
                <h6>Cantidad: {quantity} - Precio: ${precioUnidad}</h6>
                <h6>Total: ${precioUnidad * quantity}</h6>
            </div>
        </div>
    );
}

export default CarritoItem;
