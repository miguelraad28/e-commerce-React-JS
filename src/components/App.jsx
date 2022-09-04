import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import Home from "./Home";
import Productos from "./Productos";
import Contacto from "./Contacto";
import About from "./About";
import "./App.scss"
import ItemDetailContainer from "./Productos/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/productos" element={<Productos/>}></Route>
            <Route path="/productos/:id" element={<ItemDetailContainer/>}/>
            <Route path="/contacto" element={<Contacto/>}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
      </BrowserRouter>
        
        
    </>
  );
}

export default App;
