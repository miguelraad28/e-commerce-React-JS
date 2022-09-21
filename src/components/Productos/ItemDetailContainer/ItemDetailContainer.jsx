import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.scss";
import { BounceLoader } from 'react-spinners';
import {getProductDetail} from "../../../firebase/firebase.js"
import UseLoading from '../../Hooks/UseLoading';

const ItemDetailContainer = () => {
    const {loading, setLoading} = UseLoading()
    const {id} = useParams()
    const [producto, setProducto] = useState({});
    async function consultarDB(id){
        setLoading(true)
        setProducto(await getProductDetail(id))
        setLoading(false)
    }
    useEffect(() => {
        consultarDB(id)
    }, [id]);
    return (
        <div className='contenedorItemDetail'>
            {loading ? <BounceLoader color="#ffa1b1" /> :<ItemDetail producto={producto}/>}
        </div>
    );
}

export default ItemDetailContainer;
