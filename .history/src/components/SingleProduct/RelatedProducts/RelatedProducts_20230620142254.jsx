import React from "react";
import Products from "../../Products/Products"

const RelatedProducts = () => {
    return (
        <>
            <div className="realted-products">
                <Products prodList={true}/>
            </div>
        </>

    )
};

export default RelatedProducts;
