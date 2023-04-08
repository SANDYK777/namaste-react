import { useEffect, useState } from "react";
import { getEnvironmentData } from "worker_threads";

const useRestaurant=(resId)=>{
   const[restaurant,setRestaurant]=useState(null);

  
   useEffect(()=>{
       getResData();
   },[])
  getResData= async()=>{
    let data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9252926&lng=77.5529857&menuId=449047");
    let json = await data.json();
    setRestaurant(json);
}
  return restaurant;
};

export default useRestaurant;
