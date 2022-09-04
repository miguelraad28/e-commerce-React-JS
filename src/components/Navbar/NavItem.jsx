import React from 'react';
import { Link } from 'react-router-dom';

const Navitem = ({to, text}) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={to}>{text}</Link>
        </li>
    );
}

export default Navitem;
