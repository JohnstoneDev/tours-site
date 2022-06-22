import { tours } from "./tours";
import { useState } from "react";
import { useEffect } from "react";

const data = "https://github.com/JohnstoneDev/tours-array/blob/main/tours.js";

const Card = ()=> {
    const [trips,setTrips] = useState([]);
   // const [isLoading,setIsLoading] = useState(true);
    
  const getTrips = async()=>{
    const response = await fetch(data);
    const trips = await response.json();
    setTrips(trips);
  }
 
  useEffect(() => {
      getTrips()
  },[])
   
  return <div className="content">
     <h1 className="header">More-Grace Tours </h1>

  {trips.map((trip) => {
      const {id,location,price,days,img} = trip;

      return(
       <div key={id} className="card">
          <img src={img} alt=" "></img>
          <section>
            <p>Best of {location} in {days} days.</p>
            <h5>{price}</h5>
          </section>
       
       {/*<button className="btn" onClick={() => removeTrip(id)}>Not Interested</button> */}

      </div>
      )
  })}
</div>
}


export default Card