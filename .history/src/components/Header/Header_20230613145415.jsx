import "./Header.scss";
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutLineHeart } from "react-icons/ai"
import "./header.scss"

const Header = () => {
    return (
        <>
            <header className="main-header">
                <div className="header-content">
                    <ul className="left" >
                        <li>Home</li>
                        <li>About</li>
                        <li> Categories</li>
                    </ul>
                    <div className="center"> JSDEVSTORE.</div>
                    <div className="right">
                        <TbSearch />
                        <AiOutLineHeart />
                        <span className="cart-icon">
                            <CgShoppingCart />
                        </span>
                    </div>
                </div >
            </header >
        </>
    )
};

export default Header;
