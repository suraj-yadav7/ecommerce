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
                        <div className="right">product details</div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default SingleProduct;
