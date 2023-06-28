import React, { useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import  {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from "react-icons/fa"
import prod from "../../assets/products/boat_BS_4.jpg"
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const SingleProduct = () => {
    const {id} = useParams()
    console.log("the id click", id)
    const productList = useSelector((state)=> state.product.products)
    // console.log("the single product list", productList.data)
    const baseUrl =process.env.REACT_APP_DEV_URL
    let singleProd = productList.data.filter((elem)=>elem.id==id)
    console.log("final singleprod",singleProd)
 
    return (
        <>
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <img src={baseUrl+singleProd[0].attributes.img.data[0].attributes.url} alt='product-img' />
                        </div>
                        <div className="right">Product Details
                            <span className="name">{singleProd[0].attributes.title}</span>
                            <span className="price"> &#8377; {singleProd[0].attributes.price}</span>
                            <span className="desc"> {singleProd[0].attributes.desc} </span>

                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span>-</span>
                                    <span>101</span>
                                    <span>+</span>
                                    <button className="add-to-cart-button">
                                        <FaCartPlus size={21}/>
                                        ADD TO CART
                                    </button>
                                </div>
                                <span className="divider"></span>
                                <div className="info-item">
                                    <span className="text-bold">
                                        Category:<span >{singleProd[0].attributes.categories.data[0].attributes.title}</span>
                                    </span>
                                    <span className="text-bold">
                                        Share:<span className="social-icons">
                                            <FaFacebookF size={16} />
                                            <FaInstagram size={16} />
                                            <FaTwitter size={16} />
                                            <FaPinterest size={16} />
                                            <FaLinkedinIn size={16} />
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RelatedProducts />
                </div>
            </div>
        </>

    )
};

export default SingleProduct;
