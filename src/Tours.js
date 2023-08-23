import React from "react";
import Tour from "./Tour";
import "./Tours.css";

export default function Tours({ tours }) {
  return (
    <div className="title">
      <h2>Our Tours</h2>
      <div className="line"></div>
      <div>
        {tours.map((tour)=>{
            return (
                <Tour key={tour.id} {...tour} />
            )
        })}
      </div>
    </div>
  );
}
