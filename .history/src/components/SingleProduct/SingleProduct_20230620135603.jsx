import React from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import  {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from "react-icons/fa"
import prod from "../../assets/products/earbuds-prod-1.webp"
import "./SingleProduct.scss";
const SingleProduct = () => {
    return (
        <>
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <img src={prod} alt='product-img' />
                        </div>
                        <div className="right">product details
                            <span className="name">product name</span>
                            <span className="price">product price</span>
                            <span className="desc">prodcut description  </span>

                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span>-</span>
                                    <span>101</span>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default SingleProduct;
