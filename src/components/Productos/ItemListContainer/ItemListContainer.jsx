import {React, useState, useEffect} from 'react';
import ItemList from './ItemList';
import "./ItemListContainer.scss"
import { FadeLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { getProductsList } from '../../../firebase/firebase';

const ItemListContainer = () => {
    // A través de ItemListContainer se llama constantemente a la funcion getProductsList de firebase.js para conectarse a la BDD y devolver los productos deseados cada vez que haya un cambio en el useParams "categoría"
    const {categoria} = useParams()
    // Tenemos el state de loading y el de productsList, el array donde se almacenarán los productos a mostrar.
    const [loading, setLoading] = useState();
    const [productsList, setProductsList] = useState([]);
    async function consultarDB(){
        // En esta función asíncrona llamamos a la funcion de firebase.js que consulta y devuelve los productos deseados de la bdd, mientras tanto, cuando inicia, setea el Loading en true y cuando finaliza en false.
        setLoading(true)
        setProductsList(await getProductsList(categoria))
        setLoading(false)
    }
    useEffect(() => {
        //Use effect ejecutando la funcion esperando cambio de categoria.
        consultarDB()
    }, [categoria]);
    return (
        <div className='contenedorProductos'>
            <h1>PRODUCTOS INFUSA</h1>
            {/*Ternario para la clase del div que contiene los productos debido a que al ser grid, mientras mostaba el LoaderSpinner, no se veía centrado. Entonces mientras loading sea true le asignamos una clase con estilos flex centrada.*/}
            <div className={loading ? "fadeLoader" : 'listaProductos'}>
                {/*a ItemList enviamos el array de productos*/}
                {loading ?  <FadeLoader color="#ffa1b1" /> : <ItemList productsList={productsList}/>}
            </div>
        </div>
    );
}

export default ItemListContainer;