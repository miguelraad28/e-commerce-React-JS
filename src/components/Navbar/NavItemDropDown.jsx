import React from 'react';
import { Link } from 'react-router-dom';

const NavItemDropDown = ({to, text}) => {
    return (
        <li>
            <Link className="dropdown-item" to={to}>{text}</Link>
        </li>
    );
}

export default NavItemDropDown;
