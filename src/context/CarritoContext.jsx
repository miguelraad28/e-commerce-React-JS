import {React, createContext, useState} from 'react';

const CarritoContext = createContext()
const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [totalDeCarrito, setTotalDeCarrito] = useState([]);
    function actualizarTotalDeCarrito(precioTotal){
        const auxTotalDeCarrito = totalDeCarrito
        auxTotalDeCarrito.push(precioTotal)
        setTotalDeCarrito(auxTotalDeCarrito)
        console.log(totalDeCarrito)
    }
    // Esta sería la funcion addItem
    const agregarProductoCarrito = (id, quantity) => {
        // Este sería el condicional "isInCart" (true / false), si existe cambiamos cantidad, si no pasamos al else, pusheando el producto"Nuevo" que aún no existe en el array.
        if(carrito.some(productoEnCarrito => productoEnCarrito.id === id)){
            let productoExistente = (carrito.find(productoEnCarrito => productoEnCarrito.id === id))
            productoExistente.quantity = quantity
            console.log("Producto Existente", carrito)
        }else{
            const auxCarrito = carrito
            let productoNuevo = {
                id: id,
                quantity: quantity
            }
            auxCarrito.push(productoNuevo)
            setCarrito(auxCarrito)
            console.log("Producto Nuevo", carrito)
        }
    }
    // Esta sería la funcion removeItem
    const eliminarProductoCarrito = (id) => {
        const auxCarrito = carrito
        auxCarrito.splice(auxCarrito.indexOf(producto => producto.id === id), 1)
        setCarrito(auxCarrito)
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
            <CarritoContext.Provider value={{carrito, agregarProductoCarrito, eliminarProductoCarrito, vaciarCarrito, actualizarTotalDeCarrito, totalDeCarrito}}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};
