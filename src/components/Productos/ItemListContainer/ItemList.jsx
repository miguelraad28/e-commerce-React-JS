import React from 'react';
import Item from './Item';

const ItemList = ({productsList}) => {
    return (
        <>
            {productsList.map((producto) => <Item key={producto.id} {...producto}/>)}
        </>
    );
}

export default ItemList;