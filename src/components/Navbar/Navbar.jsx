import React from 'react';
import NavItem from './NavItem';
import NavbarDropDown from './NavbarDropDown';
import CartWidget from './CartWidget/CartWidget';
import "./Navbar.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        // Navbar modularizado como dijo mi tutor.
        <>
            <div className="shopLogo">
                <Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/e-commerce-a9834.appspot.com/o/logo_infusa.png?alt=media&token=368ff3eb-1119-4fe0-8870-9bb489737461"/></Link>
            </div>
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
                        </ul>
                    </div>
                </div>
                <CartWidget/>
            </nav>
        </>
    );
}

export default Navbar;
