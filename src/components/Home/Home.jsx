import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import { addCategories, addProducts } from "../../store/slices/productSlice";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../store/slices/productSlice";

const Home = () => {
    const dispatch = useDispatch()
    const {categoryList, productList} = useSelector((state) => ({categoryList: state.product.categories, productList :state.product.products}));
    console.log("the use Selector", categoryList)

    const getCatgories=()=>{
        fetchDataFromApi("/api/categories?populate=* ").then(response => {
            dispatch(addCategories(response))
        })
    }
    const getProducts = ()=>{
        fetchDataFromApi("/api/products?populate=*").then(response =>{
            dispatch(addProducts(response))
        })
    }
    useEffect(() =>{
        getCatgories()
        getProducts()
    },[])
    return (
        <>
            <div className="home">
                <Banner />
                <div className="main-content">
                    <div className="layout">
                        <Category categoriesData={categoryList} />
                        {productList && <Products productsData={productList.data}  headingText="Popular Products"/> }
                    </div>
                </div>
            </div>
        </>
    )
};
export default Home;
