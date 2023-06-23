import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import { addElement } from "../../store/slices/productSlice";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";


const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.product.data)
    return (
        <>
            <div className="home">
                <Banner />
                <div className="main-content">
                    <div className="layout">
                        <Category />
                    </div>
                </div>
            </div>
        </>

    )
};

export default Home;
