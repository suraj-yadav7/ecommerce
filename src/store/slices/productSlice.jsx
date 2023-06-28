import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_STRAPI_APP_KEY
const API_URL = process.env.REACT_APP_DEV_URL

const params={
    headers:{
        Authorization: "bearer" + API_KEY,
    },
};


export const fetchDataFromApi = async (url)=>{
    try{
        const {data} = await axios.get(API_URL+url, params)
        return data
    }
    catch(error){
        console.log("the error while fetchin data", error)
        return error
    }
}


export const fetchCategoryProduct = async(url)=>{
    // const dispatch = useDispatch()
    try{
        const {data} = await axios.get(API_URL+url, params)
        // dispatch(addCategoryProducts(data))
        return data
    }
    catch(error){
        console.log("Error while fetching product for category types", error)
    }
}

const productSlice = createSlice({
    name:"productSlice",
    initialState:{
        categories:'',
        products:'',
        categoryProd:'',
    },

    reducers:{
        addCategories:(state, action)=>{
            state.categories=(action.payload)
        },
        addProducts:(state,action)=>{
            state.products=(action.payload)
        },
        addCategoryProducts:(state,action)=>{
            state.categoryProd=action.payload
        }
    },

    extraReducers:{

    }


})

export default productSlice.reducer

export const {addCategories,addProducts,addCategoryProducts}= productSlice.actions;