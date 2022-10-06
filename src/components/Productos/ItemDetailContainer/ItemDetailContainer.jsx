import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.scss";
import { BounceLoader } from 'react-spinners';
import {getProductDetail} from "../../../firebase/firebase.js"

const ItemDetailContainer = () => {
    //Estamos a la espera de que el usuario ingrese un params en ID yendo a los detalles de un producto.
    const {id} = useParams()
    //el producto inicialmente es un objeto vacío
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState();
    async function consultarDB(){
        // Mismo metodo para consultar a la bdd que en el ItemListContainer, pero obtenemos es el DETALLE del producto no la lista de productos.
        setLoading(true)
        setProducto(await getProductDetail(id))
        setLoading(false)
        //Cuando finaliza la consulta, cambiamos a false el loading
    }
    useEffect(() => {
        consultarDB()
    }, [id]);
    return (
        <div className='contenedorItemDetail'>
            {/*Por acá hice un doble ternario, primero el loading para mientras se encuentra el producto en la bdd y luego, como la funcion de firebase, aunque no lo encuentre, me va a devolver un objeto con el id que yo le envié, por mas que no exista, me mostraría una detailcard de algo inexistente, para evitar eso hice un Object.keys del objeto donde firebase me va a retornar mi productDetail, y si es > 1, mostramos el ItemDetail, si no, significa que solo tiene un field en el objeto que es el id erróneamente enviado (O el id de un producto que ya no existe mas.), asi que mostramos, Objeto no encontrado.*/}
            {loading? <BounceLoader color="#ffa1b1" /> : (Object.keys(producto).length > 1 ? <ItemDetail producto={producto}/> : <h1>Producto no encontrado</h1>)}
        </div>
    );
}

export default ItemDetailContainer;
