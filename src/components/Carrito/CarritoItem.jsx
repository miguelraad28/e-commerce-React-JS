import {React, useState, useEffect, useContext} from 'react';
import { products } from '../products';
import "./CarritoItem.scss"
import { CarritoContext } from '../../context/CarritoContext';

const CarritoItem = ({id, quantity}) => {
    const {eliminarProductoCarrito, actualizarTotalDeCarrito} = useContext(CarritoContext);
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
    let precioTotal = precioUnidad * quantity
    useEffect(() => {
        actualizarTotalDeCarrito(precioTotal)
    }, []);
        
    return (
        <div className="contenedorProductoEnCarrito" style={{maxWidth: '540px'}} id={id}>
            <div>
                <img className="imagenProductoEnCarrito" src={img}/>
            </div>
            <div className="detallesProductoEnCarrito">
                <h5 className="tituloProductoEnCarrito">{nombre}</h5>
                <h6>Cantidad: {quantity} - Precio: ${precioUnidad}</h6>
                <h6>Total: ${precioTotal}</h6>
            </div>
            <div className='botonEliminar'>
                <button onClick={() => eliminarProductoCarrito(id)}>X</button>
            </div>
        </div>
    );
}

export default CarritoItem;
