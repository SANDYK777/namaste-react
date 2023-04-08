const Shimmer =()=>{
    return <>
     <div className="bodycards">
     {Array(10).fill("").map(e=>

        <div className="shimmercard"></div>
      )
     }
    </div>
    </>



}
export default Shimmer;