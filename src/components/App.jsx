import {React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import ItemListContainer from "./Productos/ItemListContainer/ItemListContainer";
import Checkout from "./CarritoCheckout/Checkout";
import CarritoListContainer from "./Carrito/CarritoListContainer"
import ItemDetailContainer from "./Productos/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}></Route>
              <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
              <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
              <Route path="/carrito" element={<CarritoListContainer/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
