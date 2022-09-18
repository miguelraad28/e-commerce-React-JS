import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../products';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.scss";
import { FadeLoader } from 'react-spinners';


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState();
    const obtenerProductDetail = () => new Promise((res, rej) => {
        setTimeout(()=> res(products.find(product => product.id === Number(id))), 900)})
    useEffect(() => {
        obtenerProductDetail()
        .then(response => setProducto(response))
    }, []);
    return (
        <div className='contenedorItemDetail'>
            {producto ? <ItemDetail producto={producto}/> : <FadeLoader color="#ffa1b1" />}
        </div>
    );
}

export default ItemDetailContainer;
