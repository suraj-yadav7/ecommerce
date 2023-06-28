import React from "react";
import Product from "./Product/Product"
import "./Products.scss";
const Products = ({ innerPage, headingText, productsData }) => {
    //Here productsData is array elements
    // console.log("the accessing, ", productsData)
    return (
        <>
            <div className="products-container">
                {
                    !innerPage && <div className="sec-heading" > {headingText}</div>
                }
                <div className="products">
                    {
                        productsData && productsData.map((elem,index)=>(
                            <Product key={elem.id} id={elem.id} ptitle={elem.attributes.title} pdesc={elem.attributes.desc} pprice={elem.attributes.price} imgUrl={productsData[index]}/>
                        ))
                          }
                </div>
            </div>
        </>
    )
};

export default Products;
