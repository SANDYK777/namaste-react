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

   const HeaderComponent=()=>{

    return (<div>
        <h1>Hello Functional Component</h1>
        <h2>Hellow H2{heading}</h2>
        </div>);
   }
   const heading = (<h1>
    Hello World
    </h1>)   
   const root =ReactDOM.createRoot(document.getElementById("root"));
   console.log("head",heading)
   root.render(<HeaderComponent>

   </HeaderComponent>);
