import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"productSlice",
    initialState:{
        data:["lg", "sansung", "onida"],
        loading:false,
        error:null
    },

    reducers:{
        addElement:(state, action)=>{
            state.data.push(action.payload)
        },

    },

    extraReducers:{

    }


})

export default productSlice.reducer

export const {addElement}= productSlice.actions;