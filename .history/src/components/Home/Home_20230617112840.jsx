import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import { addElement } from "../../store/slices/productSlice";
import Banner from "./Banner/Banner";


const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.product.data)
    return(
     <>
        <div className="home">
            <Banner />
        </div>
     </>   

    )        
};

export default Home;
