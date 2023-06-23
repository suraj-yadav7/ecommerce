import React from "react";
import Products from "../../Products/Products"

const RelatedProducts = () => {
    return (
        <>
            <div className="related-products">
                <Products relatedProd={true}/>
            </div>
        </>

    )
};

export default RelatedProducts;
