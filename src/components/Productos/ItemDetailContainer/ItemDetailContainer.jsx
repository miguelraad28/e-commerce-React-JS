import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../products';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.scss"


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item, setItem] = useState({});
    const getProductDetail = () => new Promise((res, rej) => res(products.find(item => item.id === Number(id))))
    useEffect(() => {
        getProductDetail()
        .then(response => setItem(response))
    }, []);
    return (
        <div className='contenedorItemDetail'>
            <ItemDetail {...item}/>
        </div>
    );
}

export default ItemDetailContainer;
