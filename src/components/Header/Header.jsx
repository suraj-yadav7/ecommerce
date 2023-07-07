import React from "react"
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"
import "./Header.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

const Header = () => {
    const [scrollVal, setScrollVal] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const handleScroll = ()=>{
        const offset = window.scrollY;
        if(offset > 200){
            setScrollVal(true)
        }
        else{
            setScrollVal(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    },[])

    const [showCart, setShowCart] = useState(false)
    const [cartCount, setCartCount] = useState()
    const {cartItem} = useSelector((state)=>({cartItem: state.product.cartItem}))
    useEffect(()=>{
        let count = 0
        if(cartItem.length>=1){
            cartItem.map((elem)=>{
                count += elem.attributes.quantity
            })

        }
        setCartCount(count)
    },[cartItem])

    return (
        <>
            <header className={`main-header ${scrollVal? "sticky-header":""}`}>
                <div className="header-content">
                    <ul className="left" >
                        <Link to="/">Home</Link>
                        <Link >About</Link>
                        <Link>Categories</Link>
                    </ul>
                    <div className="center"> SKY STORE</div>
                    <div className="right">
                        <TbSearch onClick={()=>setShowSearch(true)} />
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={()=>setShowCart(true)}> 
                            <CgShoppingCart />{cartCount}
                        </span>
                    </div>
                </div >
            </header >
            {showCart && <Cart setshowcart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    )
};

export default Header;
