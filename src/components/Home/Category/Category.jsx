import React from "react";
import "./Category.scss";
import {useNavigate} from "react-router-dom"

const Category = ({categoriesData}) => {
  const baseUrl =process.env.REACT_APP_DEV_URL
  const navigate = useNavigate()
    return (
    <>
        <div className="shop-by-category">
            <div className="categories">
                {
                   categoriesData && categoriesData.data.map((elem,index)=> (
                        <div key={index} className="category"  onClick={()=>navigate(`/category/${elem.id}`)}>
                        <img src={baseUrl+elem.attributes.img.data.attributes.url} alt="category"/>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
    )
};

export default Category;
