import {React, useState, useContext} from 'react';
import "./ItemDetail.scss"
import ItemCount from './ItemButtons/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemAdded from "./ItemButtons/ItemAdded"
import { CarritoContext } from '../../../context/CarritoContext';
const ItemDetail = ({id, nombre, descripcion, precioUnidad, stock, img}) => {
    const {agregarProductoCarrito} = useContext(CarritoContext)
    const [quitarItemCount, setQuitarItemCount] = useState(true);
    function onAdd(count){
        if(count < 1){
            toast.error('Debes añadir al menos 1', {
                position: "top-right",
                autoClose: 1700,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: false,
                });
        }else{
            agregarProductoCarrito(id, count)
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
            <div className='divImg'>
                <img src={img}/>
            </div>
            <div className='divDetailsAndButton'>
                <div className='divDetails'>
                    <h2>{nombre}</h2>
                    <p className='itemDescripcion'>{descripcion}</p>
                    <p>Precio: ${precioUnidad}</p>
                    <p>Disponibles: {stock}</p>
                    {quitarItemCount ? <ItemCount stock={stock} onAdd={onAdd}/> : <ItemAdded set={setQuitarItemCount}/>}
                    <ToastContainer
                    position="top-right"
                    autoClose={1700}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
