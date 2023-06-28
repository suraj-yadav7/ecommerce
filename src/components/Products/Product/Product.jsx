import React, { useEffect } from "react";
import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({key,id,ptitle,pprice, imgUrl}) => {
    // productsData[index].attributes.img.data[index].attributes.url
  const baseUrl =process.env.REACT_APP_DEV_URL

  const navigate = useNavigate()
    
    return(
        <>
        <div id={id} className="product-card" onClick={()=>navigate(`/singleproduct/${id}`)}>
            <div className="thumbnail" >
                <img src={baseUrl+imgUrl.attributes.img.data[0].attributes.url} alt="products" />
            </div>
            <div className="prod-details">
                <span className="name">{ptitle}</span>
                <span className="price">&#8377; {pprice}</span>
            </div>
        </div>
         </>
    ) 
};

export default Product;
