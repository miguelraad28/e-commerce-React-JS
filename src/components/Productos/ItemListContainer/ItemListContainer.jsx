import {React, useState, useEffect} from 'react';
import ItemList from './ItemList';
import "./ItemListContainer.scss"
import {products} from "../../products"

function getProducts(confirmacion){
    return new Promise((res, rej) => {
        if(confirmacion){
            res(products)
        }else{
            rej("Acceso denegado")
        }
    })
}
const ItemListContainer = () => {
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        getProducts(true)
        .then(productsList => setProductsList(productsList))
    }, []);
    return (
        <div className='contenedorProductos'>
            <h1>TIENDA ONLINE</h1>
            <div className='listaProductos'>
                <ItemList productsList={productsList}/>
            </div>
        </div>
    );
}

export default ItemListContainer;
