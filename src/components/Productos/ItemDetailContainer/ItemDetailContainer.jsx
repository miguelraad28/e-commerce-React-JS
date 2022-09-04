import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../products';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.scss";
import LoadingIcon from '../../LoadingIcon';


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState();
    const getProductDetail = () => new Promise((res, rej) => {
        setTimeout(()=> res(products.find(product => product.id === Number(id))), 2000)})
    useEffect(() => {
        getProductDetail()
        .then(response => setItem(response))
    }, []);
    return (
        <div className='contenedorItemDetail'>
            {item ? <ItemDetail {...item}/> : <LoadingIcon/>}
        </div>
    );
}

export default ItemDetailContainer;
