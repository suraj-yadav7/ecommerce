import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import { addElement } from "../../store/slices/productSlice";
import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutLineHeart} from "react-icons/ai"
import Search from "../Search/Search"
import Cart from "../Cart/Cart"
const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.product.data)
    return(
     <>
     <div>Home</div>
     <button onClick={()=>dispatch(addElement("sonyBravia"))}>add array element</button>
        <div className="list">
     {

        data.map((elem,index)=>(
            <li key={index}>{elem}</li>
        ))

    }
        </div>
     </>   


    )        
};

export default Home;
