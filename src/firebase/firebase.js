import { initializeApp } from "firebase/app";
import {collection, getFirestore, addDoc, getDocs, getDoc, doc, query, where} from "firebase/firestore";

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
            console.log("categoria", categoria, result)
            return(result)
        }else{
            const document = await getDocs(collection(db,"productos"))
            const result = document.docs.map(doc => doc ={id: doc.id, ...doc.data()})
            console.log("todos los productos",result)
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
        console.log("detalle producto", result)
        return(result)
    } catch (error) {
        console.log(error)
    }
}
export {db, app, subirDB, getProductsList, getProductDetail}