import React from "react";
import ReactDOM  from "react-dom/client";
 
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
  const Chocolate={
    Name:"Snickers",
    image:"https://www.bigbasket.com/media/uploads/p/xxl/251209_14-snickers-peanut-filled-chocolate-bar.jpg",
    cuisines:["Sweets","Chocolate"],
    rating:"4.5"
  }

  const RestuarantCard=()=>{
    return(
      <div className="card">
      <img src={Chocolate.image}/>
      <h2>{Chocolate.Name}</h2>
      <h3>{ Chocolate.cuisines.join(",")}</h3>
      <h4>{Chocolate.rating} Stars</h4>
      </div>
    )
  }


  const RestuarantCardList=()=>{

  }
   const HeaderComponent=()=>{
    const Title =()=> (
    <div className="logo">
    Logo
    </div>)

   return (<div className="header">
        <Title/>
         <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li style={Style1}>Contact Us</li>
          </ul>
         </div>
        </div>);
   }
   const BodyComponent=()=>{
    return(<div className="bodycards">
      <RestuarantCard></RestuarantCard>
      <RestuarantCard></RestuarantCard>
      <RestuarantCard></RestuarantCard>
    </div>)
   }
   const FooterComponent=()=>{
   return(<h1>Footer</h1>)
   }
   const AppLayout=()=>{
    return (
      <>
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
      </>
     
    )
   }
    
   const root =ReactDOM.createRoot(document.getElementById("root"));
   //console.log("head",heading)
   root.render(<AppLayout></AppLayout>);
