import "./Header.scss";
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"
import "./Header.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [scrollVal, setScrollVal] = useState(false)
    const handleScroll = ()=>{
        const offset = window.scrollY;
        console.log(offset)
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

    return (
        <>
            <header className={`main-header ${scrollVal? "sticky-header":""}`}>
                <div className="header-content">
                    <ul className="left" >
                        <Link to="/">Home</Link>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center"> SKY STORE</div>
                    <div className="right">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span className="cart-icon">
                            <CgShoppingCart />1
                        </span>
                    </div>
                </div >
            </header >
        </>
    )
};

export default Header;
