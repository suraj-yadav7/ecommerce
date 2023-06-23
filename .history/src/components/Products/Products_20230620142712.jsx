import React from "react";
import Product from "./Product/Product"
import "./Products.scss";
const Products = ({innerPage,relatedProd}) => {
    return (
        <>
        <div className="products-container">
            {
             !relatedProd &&  !innerPage && <div className="sec-heading">section heading</div>
            }
            <div className="products">
                
                <Product />
                <Product />
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
