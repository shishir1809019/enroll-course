import React from 'react';

const Cart = (props) => {
    const cart = props.cart

    const totalPrice = cart.reduce((sum, course) => sum + parseFloat(course.price.replace("$","")),0)
    return (
        <div>
            <h5>Total price - {totalPrice.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;