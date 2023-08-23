import React from "react";
import { useState } from "react";
import "./Tour.css";

export default function Tour({ id, image, info, name, price }) {

const [readMore,setReadMore] = useState(false)

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p>
            {readMore ? info : `${info.substring(0,200)}...`}
<button>
    {readMore ? `show less` : `read more`}
</button>
            </p>
        <button className="delete-btn">
            not interested
            </button>
      </footer>
    </article>
  );
}
