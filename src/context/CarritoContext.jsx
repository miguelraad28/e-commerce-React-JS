import {React, createContext, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarritoContext = createContext()
const CarritoProvider = (props) => {
    /* 3 States, carrito: Array donde se agregan los productos, totalDeCarrito: metodo reduce de todos los totalPorProducto para dar el total de carrito. cantidadDeCarrito: metodo reduce de todas las cantidades de productos del carrito para dar el nº de productos para mostrar al lado del cart widget*/
    const [carrito, setCarrito] = useState([]);
    const [totalDeCarrito, setTotalDeCarrito] = useState(0);
    const [cantidadDeCarrito, setCantidadDeCarrito] = useState(0);
    const actualizarCantidadDeCarrito = () => {
        const cantidadesPorProducto = carrito.map(productoEnCarrito => productoEnCarrito.cantidad)
        setCantidadDeCarrito(cantidadesPorProducto.reduce((acumulador, cantidadPorProducto) => acumulador + cantidadPorProducto, 0))
    }
    const actualizarTotalDeCarrito = () => {
        const totalesPorProducto = carrito.map(productoEnCarrito => productoEnCarrito.precioTotal)
        setTotalDeCarrito(totalesPorProducto.reduce((acumulador, totalPorProducto) => acumulador + totalPorProducto, 0))
    }
    const agregarProductoCarrito = (producto, count) => {
        //Esta sería la funcion addItem.
        //De producto desestructuro lo que voy a utilizar unicamente para sumar al carrito
        const {id, nombre, precioUnidad, img} = producto
        // Este sería el condicional "isInCart" (true / false), si existe cambiamos cantidad, si no pasamos al else, pusheando el productoNuevo que aún no existe en el array.
        if(carrito.some(productoEnCarrito => productoEnCarrito.id === id)){
            let productoExistente = (carrito.find(productoEnCarrito => productoEnCarrito.id === id))
            productoExistente.cantidad = count
            productoExistente.precioTotal = productoExistente.precioUnidad * count
        }else{
            /* Si el producto no existe en carrito, creamos uno copiando al de la BDD, Siendo los datos los mismos a excepcion de no colocarle stock ni descripcion, pero añadiendole propiedades de cantidad y precioTotal.*/
            const auxCarrito = carrito
            let productoNuevo = {
                id: id,
                nombre: nombre,
                precioUnidad: precioUnidad,
                cantidad: count,
                precioTotal: precioUnidad * count,
                img: img
            }
            // Pusheamos al array auxiliar y seteamos carrito
            auxCarrito.push(productoNuevo)
            setCarrito(auxCarrito)
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
        setCantidadDeCarrito(0)
        setTotalDeCarrito(0)
    }
    return (
        <>
            <CarritoContext.Provider value={{carrito, setCarrito, agregarProductoCarrito, eliminarProductoCarrito, vaciarCarrito, totalDeCarrito, cantidadDeCarrito}}>
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
