import React from "react";
import "./sub.css";
import { IoIosMailUnread } from "react-icons/io";


const Subscribe = () => {
  return (
    <div className="sub_container">
      <div className="sub_main">
        <div className="sub_sub op">
          <div className="sub_imger">
            <IoIosMailUnread className="dp"/>
          </div>
          <div className="sub_detailer">
            <h2 className="email_title">Your Travel Journey Starts Here</h2>
            <h4 className="email_titler">
              Sign up and we`'ll send the best deals to you
            </h4>
          </div>
        </div>
        <div className="sub_sub ghy">
          <div className="sub_inputer">
            <input type="text" className="sub_input" />
            <button className="sub_btn">subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
