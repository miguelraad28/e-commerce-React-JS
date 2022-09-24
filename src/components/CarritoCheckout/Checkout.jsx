import React from 'react';
import FormCheckout from './FormCheckout';
import "./Checkout.scss"

const Checkout = () => {
    return (
        <div className='checkoutContainer'>
            <h1>¡Estás a un paso de finalizar tu compra!</h1>
            <FormCheckout/>
        </div>
    );
}

export default Checkout;
