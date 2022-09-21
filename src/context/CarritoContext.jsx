import {React, createContext, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarritoContext = createContext()
const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [totalDeCarrito, setTotalDeCarrito] = useState(0);
    const [cantidadDeCarrito, setCantidadDeCarrito] = useState(0);
    const actualizarCantidadDeCarrito = () => {
        const cantidadesPorProducto = carrito.map(productoEnCarrito => productoEnCarrito.cantidad)
        setCantidadDeCarrito(cantidadesPorProducto.reduce((acumulador, cantidadPorProducto) => acumulador + cantidadPorProducto, 0))
    }
    const actualizarTotalDeCarrito = () => {
        const totalesPorProducto = carrito.map(productoEnCarrito => productoEnCarrito.precioTotal)
        //const auxTotalDeCarrito = totalesPorProducto.reduce((acumulador, totalPorProducto) => acumulador + totalPorProducto, 0)
        setTotalDeCarrito(totalesPorProducto.reduce((acumulador, totalPorProducto) => acumulador + totalPorProducto, 0))
    }
    // Esta sería la funcion addItem
    const agregarProductoCarrito = (producto, count) => {
        const {id, nombre, precioUnidad, img} = producto
        // Este sería el condicional "isInCart" (true / false), si existe cambiamos cantidad, si no pasamos al else, pusheando el producto"Nuevo" que aún no existe en el array.
        if(carrito.some(productoEnCarrito => productoEnCarrito.id === id)){
            let productoExistente = (carrito.find(productoEnCarrito => productoEnCarrito.id === id))
            productoExistente.cantidad = count
            productoExistente.precioTotal = productoExistente.precioUnidad * count
            console.log("Producto Existente", carrito)
        }else{
            const auxCarrito = carrito
            let productoNuevo = {
                id: id,
                nombre: nombre,
                precioUnidad: precioUnidad,
                cantidad: count,
                precioTotal: precioUnidad * count,
                img: img
            }
            auxCarrito.push(productoNuevo)
            setCarrito(auxCarrito)
            console.log("Producto Nuevo", carrito)
        }
        actualizarTotalDeCarrito()
        actualizarCantidadDeCarrito()
    }
    // Esta sería la funcion removeItem
    const eliminarProductoCarrito = (id) => {
        const auxCarrito = carrito
        auxCarrito.splice((auxCarrito.findIndex(producto => producto.id === id)), 1)
        setCarrito(auxCarrito)
        toast.error('Producto eliminado', {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        actualizarTotalDeCarrito()
        actualizarCantidadDeCarrito()
        console.log("Eliminar producto", carrito)
    }
    // Funcion clear() vaciamos el carrito por completo.
    const vaciarCarrito = () => {
        setCarrito([])
        toast.warn('Carrito vaciado', {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log("Vaciar carrito", carrito)
        setCantidadDeCarrito(0)
        setTotalDeCarrito(0)
    }
    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProductoCarrito, eliminarProductoCarrito, vaciarCarrito, totalDeCarrito, cantidadDeCarrito}}>
                {props.children}
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
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};
