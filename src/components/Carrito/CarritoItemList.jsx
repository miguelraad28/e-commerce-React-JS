import {React, useContext} from 'react';
import CarritoItem from "./CarritoItem.jsx"
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import "./CarritoItemList.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarritoItemList = () => {
    const {carrito, vaciarCarrito, totalDeCarrito} = useContext(CarritoContext);
    function toastifyVaciarCarrito() {
        toast.info('Carrito vaciado!', {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div>
            {carrito.map(productoEnCarrito => <CarritoItem key={productoEnCarrito.id} {...productoEnCarrito}/>)}
            <div className='contenedorBotonesCarrito'>
                <button className="botonRojoCarrito" onClick={vaciarCarrito}>Vaciar carrito</button>
                <Link to="/carrito/checkout">
                    <button className="botonRosaCarrito">Ir a pagar</button>
                </Link>
                <ToastContainer
                position="top-right"
                autoClose={1700}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            </div>
            <div className='totalDeCarrito'>
                <p>Total a pagar: ${totalDeCarrito}</p>
            </div>
        </div>
    );
}

export default CarritoItemList;
