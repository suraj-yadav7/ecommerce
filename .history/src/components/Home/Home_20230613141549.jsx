import { useDispatch } from "react-redux";
import "./Home.scss";
import { addElement } from "../../store/slices/productSlice";
const Home = () => {
    const dispatch = useDispatch()
    return(
     <>
     <div>Home</div>
     <button onClick={()=>dispatch(addElement("sonyBravia"))}>add array element</button>
     </>   

    )        
};

export default Home;
