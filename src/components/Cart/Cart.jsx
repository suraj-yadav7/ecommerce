import React, { useEffect, useState } from "react";
import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
import "./Cart.scss";
import { useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js"
import { makePayment } from "../../store/slices/productSlice";

const Cart = ({setshowcart}) => {
    const {cartItem} = useSelector((state)=>({cartItem: state.product.cartItem}))
    const [subtotal, setSubtotal] = useState(0)
    useEffect(()=>{
        let subval=0;
        if(cartItem){
        cartItem.map((elem)=>{
            subval =subval+ elem.attributes.quantity* elem.attributes.price
        })
    }
    setSubtotal(subval)
    },[cartItem])

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
    const handlePayment = async()=>{
        try{
        const stripe = await stripePromise;
        const res = await makePayment.post('/api/orders/',{
            products: cartItem
        })
        await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
        });
    }
    catch(error){
        console.log("Error occured while checkout",error)
    }
    }

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
                {cartItem.length<=0 &&
                <div className="empty-cart">
                    <BsCartX />
                    <span >No product in the cart</span>
                    <button className="return-cta" ><Link to={"/"}>Return to Shop</Link></button>
                </div> 
                    
                }
                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal</span>
                            <span className="text total"> &#8377; {subtotal}</span>
                        </div>    
                        <div className="button">
                            <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                            <p>Limited time offer</p>
                            <strong>Hurry Up!!</strong>
                        </div>
                    </div>     
                </>
            </div>
        </div>
        </>
    );
};
export default Cart;
