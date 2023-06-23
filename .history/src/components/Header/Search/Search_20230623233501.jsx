import React from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import "./Search.scss";
const Search = ({setShowSearch}) => {
    return (
        <>
            <div className="search-modal">
                <div className="form-field">
                    <input type="text" autoFocus placeholder="Search For Products" />
                    <MdClose className="close-btn" onClick={()=> setShowSearch(false)}/>
                </div>
                <div className="search-result-content">
                    <div className="search-results">
                        <div className="search-result-item">
                            <div className="image-container">
                                <img src={prod} alt="prodcts" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Search;
