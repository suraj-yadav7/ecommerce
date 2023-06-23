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
import "./SingleProduct.scss";
const SingleProduct = () => {
    return (
        <>
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">img</div>
                        <div className="right">product details</div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default SingleProduct;
