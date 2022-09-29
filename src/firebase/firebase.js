import { initializeApp } from "firebase/app";
import {collection, getFirestore, addDoc, getDocs, getDoc, doc, query, where, setDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_APIKEY}`,
    authDomain: "e-commerce-a9834.firebaseapp.com",
    projectId: "e-commerce-a9834",
    storageBucket: "e-commerce-a9834.appspot.com",
    messagingSenderId: "368712116322",
    appId: "1:368712116322:web:3246d5b65b2f14663a493b"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore()
async function subirDB() {
    const promise = await fetch("./products.json")
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            nombre: producto.nombre,
            categoria: producto.categoria,
            descripcion: producto.descripcion,
            stock: producto.stock,
            precioUnidad: producto.precioUnidad,
            img: producto.img
        });
    })
}

const getProductsList = async(categoria) =>{
    try{
        if(categoria){
            const document = await getDocs(query(collection(db,"productos"),where("categoria", "==", categoria)))
            const result = document.docs.map(doc => doc ={id: doc.id, ...doc.data()})
            return(result)
        }else{
            const document = await getDocs(collection(db,"productos"))
            const result = document.docs.map(doc => doc ={id: doc.id, ...doc.data()})
            return(result)
        }
    }
    catch (error){
        console.log(error)
    }
}
const getProductDetail = async(productId) =>{
    try {
        const response = await getDoc(doc(db, "productos", productId))
        const result = {id: response.id, ...response.data()}
        return(result)
    } catch (error) {
        console.log(error)
    }
}
const crearOrdenDeCompra = async(data) =>{
    try {
        const orden = await addDoc(collection(db, "ordenesDeCompra"), data)
        return(orden.id)
    } catch (error) {
        console.log(error)
    }
}
const updateStock = async (productosComprados) => {
    try {
        await productosComprados.forEach(async (product) => {
            const productId = product.id
            const cantidadComprada = product.cantidad
            const docRef = await doc(db, "productos", productId)
            const docRefForStock = await getDoc(docRef)
            const result = {...docRefForStock.data()}
            const stockActual = result.stock
            const nuevoStock = stockActual - cantidadComprada
            await setDoc(docRef, {stock: nuevoStock}, {merge:true})
        })
    } catch (error) {
        console.log(error)
    }
}
export {db, app, subirDB, getProductsList, getProductDetail, crearOrdenDeCompra, updateStock}