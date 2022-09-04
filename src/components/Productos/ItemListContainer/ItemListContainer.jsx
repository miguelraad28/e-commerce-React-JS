import {React, useState, useEffect} from 'react';
import ItemList from './ItemList';
import "./ItemListContainer.scss"
import {products} from "../../products"
import LoadingIcon from '../../LoadingIcon';

const ItemListContainer = () => {
    const getProducts = (confirmacion) => new Promise((res, rej) => {
        setTimeout(() => {
            if(confirmacion){
                res(products)
            }else{
                rej("Acceso denegado")
            }
        }, 2000)
    })
    const [productsList, setProductsList] = useState();
    useEffect(() => {
        getProducts(true)
        .then(productsList => setProductsList(productsList))
    }, []);
    return (
        <div className='contenedorProductos'>
            <h1>TIENDA ONLINE</h1>
            <div className='listaProductos'>
                {productsList ? <ItemList productsList={productsList}/> : <LoadingIcon/>}
            </div>
        </div>
    );
}

export default ItemListContainer;
