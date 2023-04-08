import React, { useTransition } from "react";
class ProfileComponent extends React.Component
{
    constructor(props)
    {
       super(props)
       this.state={
        count:0,
        mount:1
       },
       this.state={
        useInfo:{
        name:"name",
        location:"lo",
        company:"com"
        }
     }
       console.log("childconstructor")

    }

    async componentDidUpdate()
    {
    const data = await fetch('https://api.github.com/users/akshaymarch7') 
    const json = await data.json();
    console.log("here",json);
    this.setState({

      useInfo:json
    })
    componentDidUpdate()
    {
        console.log("Update here")
    }
}
   render=()=>{
    const {count,mount}= this.state;
    const {name,company,location}=this.state.useInfo;
    return(<div>
        <h1>Fuc component</h1>
        <h1>{name}</h1>


        </div>)
   }

}

export default ProfileComponent