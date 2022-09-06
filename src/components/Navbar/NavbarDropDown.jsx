import React from 'react';
import NavItemDropDown from './NavItemDropDown';

const NavbarDropDown = () => {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</a>
            <ul className="dropdown-menu color-submenu submenu" aria-labelledby="navbarDropdown">
                <NavItemDropDown to={"/productos"} text={"TODOS LOS PRODUCTOS"}/>
                <li><hr className="dropdown-divider" /></li>
                <NavItemDropDown to={"/productos/mazos"} text={"MAZOS"}/>
                <NavItemDropDown to={"/productos/velas"} text={"VELAS"}/>
                <NavItemDropDown to={"/productos/limpieza-energetica"} text={"LIMPIEZA"}/>
                <NavItemDropDown to={"/productos/tarot"} text={"TAROT"}/>
            </ul>
        </li>
    );
}

export default NavbarDropDown;
