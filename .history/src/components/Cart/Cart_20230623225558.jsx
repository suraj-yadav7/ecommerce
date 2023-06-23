import React from "react";
import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
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
                {/* <div className="empty-cart">
                    <BsCartX />
                    <span >No product in the cart</span>
                    <button className="return-cta">Return to Shop</button>
                </div> */}
                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal</span>    
                            <span className="text total"> &#8377; 499</span>
                        </div>    
                        <div className="button">
                            <button className="checkout-btn">Checkout</button>
                        </div>
                    </div>     
                </>
            </div>
        </div>
        </>
    );
};

export default Cart;
