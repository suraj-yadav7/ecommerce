import React from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
const Search = ({setShowSearch}) => {
    return (
        <>
            <div children="search-modal">
                <div className="form-field">
                    <input type="text" autoFocus placeholder="Search For Products" />
                    <MdClose onClick={()=> setShowSearch(false)}/>
                </div>
            </div>
        </>

    );
};

export default Search;
