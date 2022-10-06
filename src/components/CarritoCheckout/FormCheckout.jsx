import {React, useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { crearOrdenDeCompra, updateStock } from '../../firebase/firebase';
import "./FormCheckout.scss"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormCheckout = () => {
    const {carrito, totalDeCarrito, setCarrito} = useContext(CarritoContext);
    const [buyer, setBuyer] = useState({
        nombre:"",
        telefono:"",
        email:"",
    });
    const {nombre, telefono, email, confirmarEmail} = buyer
    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name] : e.target.value
        }))
        console.log(buyer)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!buyer.nombre || !buyer.telefono || !buyer.email || !buyer.confirmarEmail){
            toast.warn('Datos faltantes para realizar la compra', {
                position: "top-right",
                autoClose: 1700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(buyer.email !== buyer.confirmarEmail){
            toast.warn('El email debe coincidir', {
                position: "top-right",
                autoClose: 1700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(carrito.length < 1){
            toast.warn('El carrito está vacío', {
                position: "top-right",
                autoClose: 1700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            console.log(buyer)
            delete buyer.confirmarEmail
            const productosComprados = carrito.map(e=>{return{id:e.id, nombre:e.nombre, cantidad:e.cantidad, precioTotal:e.precioTotal}})
            const fechaCompra = new Date()
            const totalDeCompra = totalDeCarrito
            const data = {buyer, productosComprados, fechaCompra, totalDeCompra}
            crearOrdenDeCompra(data).then(ordenId => {
                toast.success(`Compra finalizada! El código de tu compra es ${ordenId}. También será enviado a tu mail: ${buyer.email}`, {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
            updateStock(productosComprados)
            setCarrito([])
            localStorage.removeItem("carrito");
        }
    }
    return (
        <div className='formCheckout'>
            <form id="checkoutForm"onSubmit={handleSubmit}>
                <label>Datos del comprador</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder='Nombre'
                    value={nombre || ""}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="telefono"
                    placeholder='Teléfono'
                    value={telefono || ""}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={email || ""}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="confirmarEmail"
                    placeholder='Confirmar Email'
                    value={confirmarEmail || ""}
                    onChange={handleInputChange}
                />
                <button type='submit' disabled={carrito.length > 0 ? null : true}>Finalizar compra</button>
            </form>
        </div>
    );
}

export default FormCheckout;
