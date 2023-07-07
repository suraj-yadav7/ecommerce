import React, { useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import  {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from "react-icons/fa"
import "./SingleProduct.scss";
import { useLocation, useParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import {fetchDataFromApi,addCartItem } from "../../store/slices/productSlice";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1)
    const [singleProd, setSingleProd] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const baseUrl =process.env.REACT_APP_DEV_URL
    const {id} = useParams()
    const dispatch = useDispatch()
    const locatin = useLocation()

    //It rerender when new id value is cahnged by clicking on the product
    useEffect(()=>{
        fetchDataFromApi(`/api/products?populate=*&[filters][id]=${id}`).then((response)=>{
            setSingleProd(response.data)
            // setCartItems([...cartItems,response.data[0]])
        })
        window.scrollTo (0,0)
    },[id])
  
    //Decrementing item count
    const decrement = ()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    // const handleCart = (prod, quant)=>{
    //     // cartItems[0].attributes.title= "new Title u know"
    // // console.log("cartitem",cartItems[0].attributes.title)

    //     // console.log("the handleCart para", prod)
    //     let items=[...cartItems]
    //     console.log("the array", items)
    //     console.log("prod para",prod)
    //     let index = items.findIndex(elem=> elem.id == prod.id)
    //     console.log("the items ", index)
    //     if(index !== -1){
    //         // items[index].attributes.quantity += quant
    //         console.log("item already aaded")
    //     }
    //     else{
    //         prod.attributes.quantity = quant
    //         items=[...items, prod]  
    //     }
    //     setCartItems(items)
    // }

    return (
        <>
        {singleProd &&
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <img src={baseUrl+singleProd[0].attributes.img.data[0].attributes.url} alt='product-img' />
                        </div>
                        <div className="right">Product Details
                            <span className="name">{singleProd[0].attributes.title}</span>
                            <span className="price"> &#8377; {singleProd[0].attributes.price}</span>
                            <span className="desc"> {singleProd[0].attributes.desc} </span>

                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span onClick={decrement} >-</span>
                                    <span>{quantity}</span>
                                    <span onClick={()=> setQuantity(quantity+1)}>+</span>
                                    <button className="add-to-cart-button" onClick={()=> {setQuantity(1); dispatch(addCartItem({data: singleProd[0],quant: quantity})) }}>
                                        <FaCartPlus size={21}/>
                                        ADD TO CART
                                    </button>
                                </div>
                                <span className="divider"></span>
                                <div className="info-item">
                                    <span className="text-bold">
                                        Category:<span >{singleProd[0].attributes.categories.data[0].attributes.title}</span>
                                    </span>
                                    <span className="text-bold">
                                        Share:<span className="social-icons">
                                            <FaFacebookF size={16} />
                                            <FaInstagram size={16} />
                                            <FaTwitter size={16} />
                                            <FaPinterest size={16} />
                                            <FaLinkedinIn size={16} />
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RelatedProducts productID={singleProd[0].id} categoryID= {singleProd[0].attributes.categories.data[0].id}/>
                </div>
            </div>
}
        </>

    )
};

export default SingleProduct;
