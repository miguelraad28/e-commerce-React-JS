import React from 'react';
import Item from './Item';

const ItemList = ({productsList}) => {
    return (
        <>
            {productsList.map(producto => <Item key={producto.id} producto={producto}/>)}
        </>
    );
}

export default ItemList;