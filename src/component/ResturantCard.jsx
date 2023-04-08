export const RestuarantCard=(props)=>{
 

    const img_url="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    return(
    
      <div className="card" key ={props.resto.id}>
      <img src={img_url+props.resto.cloudinaryImageId}/>
      
      <h2>{props.resto.name}</h2>
      <h4>{props.resto.cuisines.join(",")}</h4>
      <h4>{props.resto.avgRating} Stars</h4>
      <h2>{props.user.name}</h2>
      <h1></h1>
      </div>
    )
  }
