import {React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import Home from "./Home";
import Productos from "./Productos";
import Contacto from "./Contacto";
import About from "./About";
import Carrito from "./Carrito";
import Checkout from "./CarritoCheckout/Checkout";
import ItemDetailContainer from "./Productos/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/productos" element={<Productos/>}/>
              <Route path="/productos/categoria/:categoria" element={<Productos/>}/>
              <Route path="/productos/:id" element={<ItemDetailContainer/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/carrito" element={<Carrito/>}/>
              <Route path="/carrito/checkout" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
