import { tours } from "./tours";
import { useState } from "react";
// import { useEffect } from "react";



const Card = () =>{
        const [trips,setTrip] = useState(tours);
        const [readMore,setReadMore] = useState(false);

        const removeTrip =(id)=>{
            let newTrip = trips.filter((tour) => tour.id !== id);
            setTrip(newTrip);
        }


    return (
        <div className="content">
           <h1 className="header">More-Grace Tours </h1>

          {trips.map((trip) => {
              const {id,location,price,days,img,details} = trip;

              return(
               <div key={id} className="card">
                  <img src={img} alt=" "></img>
                  <section>
                    <p>Best of {location} in {days} days.</p>
                    <h5>{price}</h5>
                  </section>
                  <p class="details">
                   {readMore? details:`${details.substring(0,200)}...`}
                   <button className="toggle" onClick={() => setReadMore(!readMore)}>
                     {readMore?'show less' : 'read more'}
                   </button>
                  </p>

               <button className="btn" onClick={() => removeTrip(id)}>Not Interested</button>
              </div>
              )
          })}
        </div>
    )
}


export default Card