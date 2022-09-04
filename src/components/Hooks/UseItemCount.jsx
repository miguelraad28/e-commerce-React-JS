import {React, useState} from 'react';

const UseItemCount = (stock) => {
    const [count, setCount] = useState(0)
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
