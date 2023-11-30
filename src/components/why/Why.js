import React from "react";
import "./why.css";

const Why = () => {
  return (
    <div className="why_container">
      <div className="why_main">
        <div className="why_sub">
          <img
            loading="lazy"
            src="https://gotrip-appdir.vercel.app/img/featureIcons/2/3.svg"
            alt=""
            className="sub_img"
          />
          <h2 className="why_sub_title">Customer Care 24/7</h2>
          <p className="why_para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            esse?
          </p>
        </div>
        <div className="why_sub">
          <img
            loading="lazy"
            src="https://gotrip-appdir.vercel.app/img/featureIcons/2/2.svg"
            alt=""
            className="sub_img"
          />
          <h2 className="why_sub_title">Easy & Quick Booking</h2>
          <p className="why_para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            esse?
          </p>
        </div>
        <div className="why_sub">
          <img
            loading="lazy"
            src="https://gotrip-appdir.vercel.app/img/featureIcons/2/1.svg"
            alt=""
            className="sub_img"
          />
          <h2 className="why_sub_title">Best Price Guarantee</h2>
          <p className="why_para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            esse?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
