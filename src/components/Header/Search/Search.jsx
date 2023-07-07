import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/boat_BS_5.jpg"
import { useSelector } from "react-redux";
import "./Search.scss";
import { fetchSearchList } from "../../../store/slices/productSlice";
import { useNavigate } from "react-router-dom";
const Search = ({setShowSearch}) => {
    const [searchName, setSearchName] = useState('')
    const [searchItem, setSearchItem] = useState('')
    const baseUrl =process.env.REACT_APP_DEV_URL
    const navigate = useNavigate()

    //fetching search product list this function is defined in slice
    const handleSearch = ()=>{
        if(searchName.length>=1){
            fetchSearchList(`/api/products?populate=*&filters[title][$contains]=${searchName}`).then((respone)=> {
                setSearchItem(respone.data)
            })
        } 
        else if(!searchName.length ){
            setSearchItem(null)
        }
      
        }
        console.log("len", searchName.length)
        console.log("items", searchItem)
    return (
        <>
            <div className="search-modal">
                <div className="form-field">
                    <input type="text" autoFocus placeholder="Search For Products" value={searchName} onChange={(e)=> {setSearchName(e.target.value),handleSearch() }} />
                    <MdClose className="close-btn" onClick={()=> setShowSearch(false)}/>
                </div>
                <div className="search-result-content">
                    <div className="search-results">
                        {searchItem && searchItem.map((elem)=>(
                                <div className="search-result-item" onClick={()=>{navigate(`/singleproduct/${elem.id}`);setShowSearch(false)}}>
                                <div className="image-container">
                                    <img src={baseUrl+elem.attributes.img.data[0].attributes.url} alt="prodcts" />
                                </div>
                                <div className="prod-details">
                                    <span className="name">{elem.attributes.title}</span>
                                    <span className="desc">{elem.attributes.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Search;
