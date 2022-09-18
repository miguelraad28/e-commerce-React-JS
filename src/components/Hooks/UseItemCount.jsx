import {React, useState} from 'react';

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
    function sumarCartWidget(){

    }
    function restarCartWidget(){
        
    }
    return {sumar, restar, sumarCartWidget, restarCartWidget, count};
}

export default UseItemCount;
