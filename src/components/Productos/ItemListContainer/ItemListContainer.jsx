import {React, useState, useEffect} from 'react';
import ItemList from './ItemList';
import "./ItemListContainer.scss"
import {products} from "../../products"
import { FadeLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const {categoria} = useParams()
    const [productsList, setProductsList] = useState();
    const [titulo, setTitulo] = useState("");
    const getProducts = (confirmacion) => new Promise((res, rej) => {
        if(categoria){
            setProductsList()
            let tituloCategoria = categoria.replace("-", " ")
            setTitulo(`ESTÁS EN LA CATEGORÍA ${tituloCategoria}`)
            setTimeout(() => {
                if(confirmacion){
                    res(products.filter(products => products.categoria === categoria))
                }else{
                    rej("Acceso denegado")
                }
            }, 2000)
        }else{
            setProductsList()
            setTitulo("TODOS NUESTROS PRODUCTOS")
            setTimeout(() => {
                if(confirmacion){
                    res(products)
                }else{
                    rej("Acceso denegado")
                }
            }, 2000)
        }
    })
    useEffect(() => {
        getProducts(true)
        .then(productsList => setProductsList(productsList))
    }, [categoria]);
    return (
        <div className='contenedorProductos'>
            <h1>{titulo}</h1>
            <div className={productsList ? 'listaProductos' : "fadeLoader"}>
                {productsList ? <ItemList productsList={productsList}/> : <FadeLoader color="#ffa1b1" />}
            </div>
        </div>
    );
}

export default ItemListContainer;
