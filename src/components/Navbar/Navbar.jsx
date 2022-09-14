import React from 'react';
import NavItem from './NavItem';
import NavbarDropDown from './NavbarDropDown';
import CartWidget from './CartWidget';
import "./Navbar.scss"

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navbar navbar-expand-lg navbar-light  container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavItem to="/" text="INICIO"/>
                            <NavbarDropDown/>
                            <NavItem to="/contacto" text="CONTACTO"/>
                            <NavItem to="/about" text="ACERCA DE NOSOTROS"/>
                            <NavItem to="/carrito" text="CARRITO"/>
                        </ul>
                    </div>
                </div>
                <CartWidget/>
            </nav>

        </>
    );
}

export default Navbar;
