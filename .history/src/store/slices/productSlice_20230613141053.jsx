import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"productSlice",
    initialState:{
        data:["lg", "sansung", "onida"],
        loading:false,
        error:null
    },

    reducers:{

    },

    extraReducers:{

    }


})

export default productSlice.reducer

export const {}= productSlice.actions;