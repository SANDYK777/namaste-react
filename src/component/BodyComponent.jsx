import useRestaurant from "../utils/useRestaurant";
import { useState,useEffect } from "react";
import { RestuarantCard } from "./ResturantCard";
import Shimmer from "./Shimmer";
export const BodyComponent=(props)=>{
    const res = useRestaurant()
    
    const [searchtxt,setSearchTxt]= useState("Snickers");
    const [restuarant,setRestuarant]=useState([])
    let url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0549504&lng=77.58882489999999&page_type=DESKTOP_WEB_LISTING"
    useEffect(()=>{
      getResturant();
    },[])

    useEffect(()=>{
      restuarant.filter(i=>i===searchtxt)
    },[])
   
      getResturant=async()=>{
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','http://localhost:1234');
    
        const data = await fetch(url);
        const json = await data.json();
        setRestuarant(json.data.cards[2].data.data.cards);
       
        console.log("restro",json.data.cards[2].data.data.cards);
    }

    
    return restuarant.length===0?
    (<Shimmer/>)
    :
    (
    <>
    <div className="search-container">
      <input 
      type="text"
     className="search-input" 
      placeholder="search" 
      value={searchtxt}
      onChange={(e)=> {setSearchTxt(e.target.value)}}
      >
      </input>
     
      <button className="search-btn">Search</button>
    </div>
    <div className="bodycards">
      {restuarant.map((i)=>
       
      <RestuarantCard resto={i.data} user={props.user} ></RestuarantCard>
      
      )}
    </div>
    </>)
   }
