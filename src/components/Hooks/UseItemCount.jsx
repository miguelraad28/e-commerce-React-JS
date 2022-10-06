import {React, useState} from 'react';

//custom hook para aumentar o disminuir la cantidad a agregar al carrito según disponibilidad de stock
const UseItemCount = (stock) => {
    const [count, setCount] = useState(1)
    function sumar(){
        if(count < stock){
            setCount(count + 1)
        }
    }
    function restar(){
        if(count > 0){
            setCount(count - 1)
        }
    }
    return {sumar, restar, count};
}

export default UseItemCount;
