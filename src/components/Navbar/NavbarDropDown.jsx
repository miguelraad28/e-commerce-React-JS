import React from 'react';
import NavItemDropDown from './NavItemDropDown';

const NavbarDropDown = () => {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTOS</a>
            <ul className="dropdown-menu color-submenu submenu" aria-labelledby="navbarDropdown">
                <NavItemDropDown to={"/productos"} text={"TODOS LOS PRODUCTOS"}/>
                <li><hr className="dropdown-divider" /></li>
                <NavItemDropDown to={"/productos/categoria/mazos"} text={"MAZOS"}/>
                <NavItemDropDown to={"/productos/categoria/velas"} text={"VELAS"}/>
                <NavItemDropDown to={"/productos/categoria/limpieza-energetica"} text={"LIMPIEZA"}/>
                <NavItemDropDown to={"/productos/categoria/tarot"} text={"TAROT"}/>
            </ul>
        </li>
    );
}

export default NavbarDropDown;
