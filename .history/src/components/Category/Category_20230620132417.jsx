import React from "react"
import Products  from "../Products/Products"
import "./Category.scss";

const Category = () => {
    return (
        <>
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">Category title</div>
                <Products />
            </div>
        </div>
        </>
    ) 
};

export default Category;
