import React, { useContext, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import {Chocolate} from "./constants"
import ProfileComponent from "./component/ProfileComponent"
import {HeaderComponent} from './component/HeaderComponent'
import { BodyComponent } from "./component/BodyComponent";
import AboutComponent from "./component/AboutComponent"
import About from "./component/About";
import useRestaurant from "./utils/useRestaurant";
import useOnline from "./utils/useOnline";
import { UserContext } from "./component/UserContext";
import { Provider } from "react-redux";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import FooterComponent from "./component/FooterComponent";
import Contact from "./component/Contact";
import store from "./utils/store";
//import store from "./utils/store";
/*

    // {} add paramas like id , class etc tag attributes 
   const heading = React.createElement("h1",{ id:"title",key:"1"}
     ,"Hello World 1 Parcel" );
   const heading2 = React.createElement("h2",{ id:"title",key:"2"},"Hello World 2" );
   // pass children to create a complex html structure 
   const container = React.createElement("div",{id:"container"},[heading,heading2])
   */
      /*
      Header
       -Logo
       - List Items(Rigth side)
       - Cart
      Body 
      - Search Bar
      - Restuarant list 
        -Restuarant Card(Many cards)
          -Image
          -Name
          -Rating
          -Cuisine

      Footer
      -Links
      -copyrights
      
     
      */
  
   const config=[
    {
      type:"carousel",
      cards:[
        {
          offerName:"50% off",
        },
        {
          offerName:"No Delivery charge"
        }
      ]
    }
   ]   
  const Style1={
    backgroundColor:"green"
  }
 

  

  const RestuarantCardList=()=>{

  }
  const onChangeInput=()=>{

  }
  
  
    //let searchtxt="Snickers";
   
   
   const AppLayout=()=>{


   // const {user} = useContext(UserContext);
   const [user,setUser]=useState({
    name:"Namaste React",
    email:"email@dummy.com"
  })
    const online= useOnline();
  
    return (
      <>
      <Provider store = {store}>
      <UserContext.Provider value={{
        user:user,
      }}
      >
      <HeaderComponent/>
      <Outlet/>
      <BodyComponent user={user}></BodyComponent>
      <input value={user.name} onChange={
      e=>setUser(e.target.value)} />

      <AboutComponent></AboutComponent>
      <FooterComponent/>
      
      </UserContext.Provider>
      </Provider>
      </>
    )

   }
    
   const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        
        {


        path:"/about",
        element:<About/>  
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ]
    },
    {
      path:"/about",
      element:<About/>
    }
   ])
  
   const root =ReactDOM.createRoot(document.getElementById("root"));
   //console.log("head",heading)
   root.render(<RouterProvider router={appRouter}></RouterProvider>);
