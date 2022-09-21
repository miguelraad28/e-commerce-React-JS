import {React, useState, useEffect} from 'react';
import ItemList from './ItemList';
import "./ItemListContainer.scss"
import { FadeLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { getProductsList } from '../../../firebase/firebase';
import UseLoading from '../../Hooks/UseLoading';

const ItemListContainer = () => {
    const {loading, setLoading} = UseLoading()
    const {categoria} = useParams()
    const [productsList, setProductsList] = useState([]);
    const [titulo, setTitulo] = useState("");
    async function consultarDB(){
        setLoading(true)
        setProductsList(await getProductsList(categoria))
        setLoading(false)
    }
    useEffect(() => {
        consultarDB()
        if(categoria){
            let tituloCategoria = categoria.replace("-", " ")
            setTitulo(`ESTÁS EN LA CATEGORÍA ${tituloCategoria}`)
        }else{
            setTitulo("TODOS NUESTROS PRODUCTOS")
        }
    }, [categoria]);
    return (
        <div className='contenedorProductos'>
            <h1>{titulo}</h1>
            <div className={loading ? "fadeLoader" : 'listaProductos'}>
                {loading ?  <FadeLoader color="#ffa1b1" /> : <ItemList productsList={productsList}/>}
            </div>
        </div>
    );
}

export default ItemListContainer;
