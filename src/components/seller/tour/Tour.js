import React from "react";
import "../hotels/hotels.css";
import { CiHeart } from "react-icons/ci";

const Tour = () => {
  return (
    <div className="hotel_container">
      <div className="hotel_card">
       
           <div className="hotel_minicards">
          <div className="hotel_img">
            <img
              src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F1.png&w=384&q=75"
              alt=""
            />
            <div className="heart_img">
              <CiHeart className="hearted"/>
            </div>
            <div className="typer">
              <h3 className="typer_title">breakfast included</h3>
            </div>
          </div>
          <div className="hotel_details">
            <h2 className="hotel_title">The Montcalm At Brewery London City</h2>
            <h3 className="hotel_dest">Westminster Borough, London</h3>
            <div className="hotel_rate">
              <h3 className="hotel_rate_value">4.7</h3>
              <h3 className="hotel_rate_type">expectional</h3>
              <h3 className="hotel_reviews">3k reviews</h3>
            </div>
            <h3 className="start_price">starting from US$72</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
