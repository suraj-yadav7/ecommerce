import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, handlQuantity, removeCartItem } from "../../../store/slices/productSlice";

const CartItem = () => {
    const {cartItem} = useSelector((state)=>({cartItem: state.product.cartItem}))

    const dispatch = useDispatch()
    const baseUrl =process.env.REACT_APP_DEV_URL
    return (
        <>
            <div className="cart-products">
                {cartItem && cartItem.map((elem)=>(
                    <div className="cart-product">
                    <div className="image-container">
                        <img src={baseUrl+elem.attributes.img.data[0].attributes.url} alt="prods" />
                    </div>
                    <div className="prod-details">
                        <spam className="name">{elem.attributes.title}</spam>
                        <MdClose className="close-btn" onClick={()=>{dispatch(removeCartItem(elem.id))}}/>
                        <div className="quantity-buttons">
                            <span onClick={()=>{dispatch(handlQuantity({data: elem,type:"dec"}))}}>-</span>
                            <span>{elem.attributes.quantity}</span>
                            <span onClick={()=>{dispatch(handlQuantity({data: elem,type:"inc"}))}}>+</span>
                        </div>
                        <div className="text">
                            <span>{elem.attributes.quantity}</span>
                            <span>X</span>
                            <span>&#8377; {elem.attributes.price}</span>
                            <span>= {elem.attributes.quantity*elem.attributes.price}</span>
                        </div>
                    </div>
                </div>
                    ))}
            </div>
        </>
    );
};

export default CartItem;
