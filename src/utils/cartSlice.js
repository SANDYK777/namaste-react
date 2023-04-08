import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
  name:'cart',
  initialState:{
    items:["Banana","Apple"],
  },
  reducers:
  {
    addItem:(state,action)=>{
     state.items.push(action.payload)
    },
    removeItem:(state,action)=>{
      state.items.pop()//state.items.indexOf(action.payload)
    },
    clearCart:(state)=>{
      state.items=[]
    }
  }
})

export const{addItem,removeItem,clearCart}=cartSlice.actions; 
export default cartSlice.reducer;