import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.scss";
import { BounceLoader } from 'react-spinners';
import {getProductDetail} from "../../../firebase/firebase.js"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState();
    async function consultarDB(){
        setLoading(true)
        setProducto(await getProductDetail(id))
        setLoading(false)
    }
    useEffect(() => {
        consultarDB()
    }, [id]);
    return (
        <div className='contenedorItemDetail'>
            {loading? <BounceLoader color="#ffa1b1" /> : <ItemDetail producto={producto}/>}
        </div>
    );
}

export default ItemDetailContainer;
