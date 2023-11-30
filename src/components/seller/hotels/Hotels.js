import React from "react";
import "./hotels.css";
import { CiHeart } from "react-icons/ci";
import { Link,} from "react-router-dom";

const Hotels = ({ hotels }) => {
 
  return (
    <div className="hotel_container">
      <div className="hotel_card">
        {hotels.map((hotel) => (
        // <>
            <Link className="linked" to={`/hotel/${hotel.id}`} >
          <div key={hotel.id}>
          <div className="hotel_minicards">
            <div className="hotel_img">
              <img loading="lazy" src={hotel.img} alt="" />
              <div className="heart_img">
                <CiHeart className="hearted" />
              </div>
              <div className="typer">
                <h3 className="typer_title">{hotel.typer}</h3>
              </div>
            </div>
            <div className="hotel_details">
              <h2 className="hotel_title">
                {hotel.name}
              </h2>
              <h3 className="hotel_dest">
                {hotel.location}
              </h3>
              <div className="hotel_rate">
                <h3 className="hotel_rate_value">

                  {hotel.value}
                </h3>
                <h3 className="hotel_rate_type">expectional</h3>
                <h3 className="hotel_reviews">3k reviews</h3>
              </div>
              <h3 className="start_price">
                starting from
                <span style={{ color: "#3554D1", margin: "0px 5px" }}>
                  {hotel.price}
                </span>
              </h3>
            </div>
            </div>
      </div>
       </Link>
          ))}
          </div>
    </div>
  );
};

export default Hotels;
