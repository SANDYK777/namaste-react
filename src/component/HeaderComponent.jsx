import { display } from "@mui/system";
import { useState,useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import store from "../utils/store";

import UserContext from "../utils/UserContext";
export const HeaderComponent=()=>{

  const cartItems= useSelector((store)=>store.cart.items)
  const dispatch = useDispatch()
  const handleAdditem=()=>{
    dispatch(addItem("grapes"))
  }
  const handleRemoveItems=()=>{
    dispatch(removeItem("grapes"));
  }
  const handleClearCart=()=>{
    dispatch(clearCart());
  }
  const user= useContext(UserContext);
  const [isVisible,setIsVisible]=useState();
  const Style1={
    backgroundColor:"green"
  }
    const Title =()=> (
    <div className="logo">
    Logo
    </div>)

   return (<div className="header">
        <Title/>
        <p>{user.user.name}</p>
         <div className="nav-items">
          <ul>
          <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link>
            <li style={Style1} to="/contact">Contact Us</li>
            </Link>
            <li><a href="/Instamart"></a></li>
            <li>
              Cart- {cartItems.length}
            </li>
          </ul>
            
         </div>

         <div>
          <button   onClick={handleAdditem}>Add item</button>
          <button   onClick={handleRemoveItems}>Remove item</button>
          <button   onClick={handleClearCart}>Clear Cart </button>

          

         </div>
         <div><button onClick={()=>{!isVisible?setIsVisible(true):setIsVisible(false)}}>

          {!isVisible?<p>show</p>:<p>hide</p>}
         </button>
         {isVisible?<h1>Hello</h1>:"'"}
         </div>
        </div>);
   }

   