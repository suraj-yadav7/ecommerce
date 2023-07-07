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
        // console.log("slice",data)
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

export const fetchSearchList = async(url)=>{
    try{
        const {data}= await axios.get(API_URL+url, params)
        return data
    }
    catch(error){
        console.log("Error while fetching search product list", error)
    }
}

export const makePayment = async (url)=>{
    try{
        const {data}= axios.create(API_URL+url, params)
        return data
    }
    catch(error){
        console.log("Error while fetching search product list", error)
    }
    
} 

const productSlice = createSlice({
    name:"productSlice",
    initialState:{
        categories:'',
        products:'',
        categoryProd:'',
        cartItem:[],
        quantity:''
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
        },
        addCartItem:(state,action)=>{
            //action payload is object from dispatch
            console.log("slice reducer",action.payload.data, action.payload.quant)
            let items=[...state.cartItem]
            let index = state.cartItem.findIndex((elem)=>elem.id == action.payload.data.id)
            // state.cartItem.push(action.payload)
            if(index !== -1){
                items[index].attributes.quantity = action.payload.quant
            }
            else{
                action.payload.data.attributes.quantity = action.payload.quant
                items=[...state.cartItem, action.payload.data]
            }
            state.cartItem=items
        },
        removeCartItem:(state,action)=>{
            // console.log("reducer", state.cartItem)
            state.cartItem=state.cartItem.filter((elem)=>elem.id !== action.payload)
        },
        handlQuantity:(state,action)=>{
            let items=[...state.cartItem]
            let index = state.cartItem.findIndex((elem)=>elem.id == action.payload.data.id)
            if(action.payload.type==="inc"){
                items[index].attributes.quantity += 1
            } else if(action.payload.type==="dec"){
                if(items[index].attributes.quantity>=1){
                    items[index].attributes.quantity -= 1
                }
            }
            state.cartItem = items
        }
    },

    extraReducers:{

    }


})

export default productSlice.reducer

export const {addCategories,addProducts,addCategoryProducts,addCartItem,removeCartItem,handlQuantity}= productSlice.actions;