import React from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import "./CartItem.scss";
const CartItem = () => {
    return (
        <>
            <div className="cart-products">
                <div className="cart-product">
                    <div className="img-container">
                        <img src={} alt="prods" />
                    </div>
                    <div className="prod-details">
                        <spam className="name">Product Name</spam>
                        <MdClose className="close-btn" />
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>10</span>
                            <span>+</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;
