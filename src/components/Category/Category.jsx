import React, { useEffect } from "react"
import Products  from "../Products/Products"
import "./Category.scss";
import { useLocation, useParams } from "react-router-dom";
import { addCategoryProducts, fetchCategoryProduct } from "../../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
    const {id} = useParams()
    const categoryProdData = useSelector((state)=>state.product.categoryProd)
    console.log("The products in categoris useSelector", categoryProdData)
    const locatin = useLocation()
    const dispatch = useDispatch()
    useEffect(()=>{
        fetchCategoryProduct(`/api/products?populate=*&[filters][categories][id]=${id}`).then((respone) =>
        dispatch(addCategoryProducts(respone))
        )
        window.scrollTo(0,0)
    },[])
    return (
        <>
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">{categoryProdData ? categoryProdData.data[0].attributes.categories.data[0].attributes.title: "Category Items"}</div>
                <Products innerPage={true}  productsData={categoryProdData.data}/>
            </div>
        </div>
        </>
    ) 
};

export default Category;
