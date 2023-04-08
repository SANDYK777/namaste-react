import React from "react";
import ProfileComponent from "./ProfileComponent";
import UserContext  from '../utils/UserContext';
class AboutComponent extends React.Component
{
      constructor(props)
      {
         super(props)
         console.log("Parentconstructor")
         this.state={
            useInfo:{
            name:"name",
            location:"lo",
            company:"com"
            }
         }
      }
     
      render(){
        console.log("Parentrender")
      
        return(<div>
             <UserContext.Consumer>
               {(value)=>console.log("lol",value)}
             </UserContext.Consumer>
            <ProfileComponent name ={"Ajman"}></ProfileComponent>
        </div>)
      }
}

export default AboutComponent