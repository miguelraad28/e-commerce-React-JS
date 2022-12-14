import {React, useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { crearOrdenDeCompra, updateStock } from '../../firebase/firebase';
import "./FormCheckout.scss"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

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
            delete buyer.confirmarEmail
            const productosComprados = carrito.map(e=>{return{id:e.id, nombre:e.nombre, cantidad:e.cantidad, precioTotal:e.precioTotal}})
            const fechaCompra = new Date()
            const totalDeCompra = totalDeCarrito
            const data = {buyer, productosComprados, fechaCompra, totalDeCompra}
            crearOrdenDeCompra(data).then(ordenId => {
                Swal.fire({
                    icon: "success",
                    title: "¡Compra exitosa!",
                    text: `Su ID de compra es ${ordenId}. El detalle será enviado a ${email}`
                })
            })
            updateStock(productosComprados)
            setCarrito([])
            setBuyer({
                nombre:"",
                telefono:"",
                email:"",
            })
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
