import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import { addElement } from "../../store/slices/productSlice";


const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=> state.product.data)
    return(
     <>
     <div className="container">Home
     <button onClick={()=>dispatch(addElement("sonyBravia"))}>add array element</button>
        <div className="list">
     {

        data.map((elem,index)=>(
            <li key={index}>{elem}</li>
        ))

    }
        </div>
     </div>
     </>   

    )        
};

export default Home;
