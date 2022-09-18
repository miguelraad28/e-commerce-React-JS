import {React, createContext, useState} from 'react';

const CarritoContext = createContext()
const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [totalDeCarrito, setTotalDeCarrito] = useState();
    const actualizarTotalDeCarrito = () => {
        let acumulador = 0
        const totalesPorProducto = carrito.map(productoEnCarrito => productoEnCarrito.precioTotal)
        console.log(totalesPorProducto)
        setTotalDeCarrito(acumulador)
        
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
    }
    // Esta sería la funcion removeItem
    const eliminarProductoCarrito = (id) => {
        const auxCarrito = [...carrito]
        auxCarrito.splice((auxCarrito.indexOf(producto => producto.id === id)), 1)
        setCarrito(auxCarrito)
        actualizarTotalDeCarrito()
        console.log("Eliminar producto", carrito)
    }
    // Funcion clear() vaciamos el carrito por completo.
    const vaciarCarrito = () => {
        const auxCarrito = []
        setCarrito(auxCarrito)
        console.log("Vaciar carrito", carrito)
    }
    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProductoCarrito, eliminarProductoCarrito, vaciarCarrito, totalDeCarrito}}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};
