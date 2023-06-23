import React from "react";
import Product from "./Product/Product"
import "./Products.scss";
const Products = () => {
    return (
        <>
        <div className="products-container">
            <div className="sec-heading">section heading</div>
            <div className="products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
        </>
        )
};

export default Products;
