import {React, useContext} from 'react';
import "./CartWidget.scss"
import { CarritoContext } from '../../../context/CarritoContext';
import { Link } from 'react-router-dom';
import CWVacio from './CWVacio';
import CWListContainer from './CWListContainer';

const CartWidget = () => {
    const {carrito, cantidadDeCarrito, totalDeCarrito} = useContext(CarritoContext);
    return (
        <div className="div-carrito">
            <button className="boton-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div className="cartIconContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className="bi bi-cart4" viewBox="0 0 18 18">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                    {carrito.length > 0 ? <p>{cantidadDeCarrito}</p> : null}
                </div>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="bi bi-cart4" viewBox="0 0 18 18">
                            <path path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                        Carrito de compras
                    </h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                {carrito.length > 0 ? <CWListContainer/> : <CWVacio/>}
                <div className="offcanvas-footer">
                    <div className="divTotalAPagar">
                        <p>Total a pagar</p>
                        <p id="idTotalAPagar">: <b>${totalDeCarrito}</b></p>
                    </div>
                    <div className="divBotonFinalizarCompra">
                        <Link to="/checkout">
                            <button disabled={carrito.length > 0 ? null : true} className="botonRosaCarrito">Finalizar Compra</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CartWidget;
