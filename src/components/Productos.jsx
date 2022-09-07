import React from 'react';
import ItemListContainer from './Productos/ItemListContainer/ItemListContainer';

const Productos = ({titulo}) => {
    return (
        <>
            <ItemListContainer titulo={titulo}/>
        </>
    );
}

export default Productos;
