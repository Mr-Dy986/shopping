import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
function Cart ({ cartItems, onCheckout }) {
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

    return (
        <div className="cart__container">
            { cartItems.length === 0 ? "មិនទាន់កម្មង់" : "" }
            <br /> <span className="">Total Price: { totalPrice.toFixed(0) } ៛</span>
            <Button
                title={ `${cartItems.length === 0 ? "កម្មង់" : "ផ្ទៀងផ្ទាត់"} ` }
                type={ "checkout" }
                disable={ cartItems.length === 0 ? true : false }
                onClick={ onCheckout }
            />
        </div>
    );
}

export default Cart;