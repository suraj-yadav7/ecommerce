import React,{useEffect, useState} from "react";
import Products from "../../Products/Products"
import { fetchDataFromApi } from "../../../store/slices/productSlice";

const RelatedProducts = ({productID, categoryID}) => {
    const[productsData, setProductsData] = useState(false)

    useEffect(()=>{
        fetchDataFromApi(`/api/products?populate=*&filters[id][$ne]=${productID}&filters[categories][id]=${categoryID}&pagination[start]=0&pagination[limit]=4`).then((response)=> {
            setProductsData(response.data)
        })
    },[productID])
   
    return (
        <>
        {productsData &&
            <div className="related-products">
                <Products headingText="Related Products" productsData={productsData}/>
            </div>
            }
        </>
    )
};

export default RelatedProducts;
