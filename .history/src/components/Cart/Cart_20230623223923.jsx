import React from "react";
import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import "./Cart.scss";

const Cart = ({setshowcart}) => {
    return (
        <>
        <div className="cart-panel">
            <div className="opac-layer">This is cart</div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={()=>setshowcart(false)}>
                        <MdClose />
                        <span className="text">Close</span>
                        </span>
                </div>
                <div className="empty-cart">
                    <BsCartX />
                    <span >No product in the cart</span>
                    <button className="return-cta">Return to Shop</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Cart;
