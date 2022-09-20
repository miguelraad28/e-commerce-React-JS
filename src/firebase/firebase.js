import { initializeApp } from "firebase/app";
import {collection, getFirestore, addDoc} from "firebase/firestore";

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
async function cargarDB() {
    const promise = await fetch("./products.json")
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            id: producto.id,
            nombre: producto.nombre,
            categoria: producto.categoria,
            descripcion: producto.descripcion,
            stock: producto.stock,
            precioUnidad: producto.precioUnidad,
            img: producto.img
        });
    })
    console.log(productos)
}
cargarDB()

export {db, app, cargarDB}