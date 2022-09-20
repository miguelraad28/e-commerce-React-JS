import "dotenv/config"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "e-commerce-a9834.firebaseapp.com",
    projectId: "e-commerce-a9834",
    storageBucket: "e-commerce-a9834.appspot.com",
    messagingSenderId: "368712116322",
    appId: "1:368712116322:web:3246d5b65b2f14663a493b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);