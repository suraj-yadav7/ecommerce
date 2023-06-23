import React from "react";
import {MdClose} from "react-icons/md"
import {BsCartx} from "react-icons/bs"
// import "./Cart.scss";

const Cart = (setshowcart) => {
    return (
        <>
        <div className="cart-panel">
            <div className="opac-layer">This is cart</div>
            <div className="cart-content"></div>
            <button onClick={()=> setshowcart(false)}></button>

        </div>
        </>
    );
};

export default Cart;
