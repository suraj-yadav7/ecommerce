import React from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
const Search = ({setShowSearch}) => {
    return (
        <>
            <div className="search-modal">
                <div className="form-field">
                    <input type="text" autoFocus placeholder="Search For Products" />
                    <MdClose className="close-btn" onClick={()=> setShowSearch(false)}/>
                </div>
            </div>
        </>

    );
};

export default Search;
