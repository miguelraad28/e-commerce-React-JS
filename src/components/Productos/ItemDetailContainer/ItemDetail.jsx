import {React, useState, useContext} from 'react';
import "./ItemDetail.scss"
import ItemCount from './ItemButtons/ItemCount';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemAdded from "./ItemButtons/ItemAdded"
import { CarritoContext } from '../../../context/CarritoContext';
const ItemDetail = ({producto}) => {
    // Llamamos a la funcion de agregar al carrito del Context, tenemos un state de "quitarItemCount" cuando el cliente ya añada el producto a su carrito
    const {agregarProductoCarrito} = useContext(CarritoContext)
    const [quitarItemCount, setQuitarItemCount] = useState(true);
    const {id, nombre, descripcion, precioUnidad, stock, img} = producto
    //Función onAdd ejecutada a través del ItemCount, recibiendo la cantidad que el cliente quiere añadir.
    function onAdd(count){
        if(count < 1){
            toast.error('Debes añadir al menos 1', {
                position: "top-right",
                autoClose: 1700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: false,
                });
        }else{
            // Si es mayor a 1 producto, se ejecuta la funcion del Context y quitamos el ItemCount, mostrando "ItemAdded"
            agregarProductoCarrito(producto, count)
            setQuitarItemCount(false)
            toast.success(`${count} Producto(s) añadido(s)`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: false,
                });
        }
    }
    return (
        <div className='itemDetailGrid' id={id}>
            <div className="divImg">
                <img src={img}/>
            </div>
            <div className='divDetailsAndButton'>
                <div className='divDetails'>
                    <h2>{nombre}</h2>
                    <p className='itemDescripcion'>{descripcion}</p>
                    <p>Precio: ${precioUnidad}</p>
                    <p>Disponibles: {stock}</p>
                    {/* DOble ternario, el de quitarItemCount y si el stock es < 1 no mostramos el ItemCount directamente y le hacemos saber al cliente que está agotado.*/}
                    {quitarItemCount ? (stock > 0 ? <ItemCount stock={stock} onAdd={onAdd}/> : <h3>¡Producto agotado!</h3>) : <ItemAdded set={setQuitarItemCount}/>}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
