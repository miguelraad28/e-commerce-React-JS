import React from 'react';
import Item from './Item';

const ItemList = ({productsList}) => {
    // Recibimos el array de productos para mapearlos y mostrarle las cards a los clientes a través del componente Item
    return (
        <>
            {productsList.map(producto => <Item key={producto.id} producto={producto}/>)}
        </>
    );
}

export default ItemList;