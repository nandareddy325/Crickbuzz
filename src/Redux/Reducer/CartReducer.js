import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartValues:[],totalPrice:0};
const CartReducer = createSlice({
    name : "cartRed",
    initialState,
    Reducers : {
        incrementCart : ()=>{},
        decrementCart : ()=>{}
    }
})