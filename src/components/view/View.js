import React from "react";
import { FaHotel } from "react-icons/fa";
import { MdOutlineTour } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { MdHolidayVillage } from "react-icons/md";
import { GiCruiser } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import "./view.css";
import Search from "../search/Search";

const View = () => {
  return (
    <div className="view_container">
      <div className="view_top_card">
        <h2 className="top_cards">
          <FaHotel className="view_icon" />
          hotel
        </h2>
        <h2 className="top_cards">
          <MdOutlineTour className="view_icon" />
          tour
        </h2>
        <h2 className="top_cards">
          <FiActivity className="view_icon" />
          activity{" "}
        </h2>
       
        <h2 className="top_cards">
          <GiCruiser className="view_icon" />
          cruise
        </h2>
        <h2 className="top_cards">
          <FaCarSide className="view_icon" />
          car
        </h2>
        <h2 className="top_cards">
          <MdFlight className="view_icon" />
          flights
        </h2>
       
      </div>

      <div className="view_page_section">
        <div className="view_section tr">
          <h3 className="section_title">
            <span style={{ color: "#F8D448" }}>
              Where Would
              <br />
            </span>
            You Like To Go?
          </h3>
          <h6 className="section_title2">
            Checkout Beautiful Places Arround the World.
          </h6>
          <div className="seracher">
            <div className="serach_mini"></div>
            <div className="serach_mini"></div>
            <div className="serach_mini"></div>
            <div className="serach_mini"></div>
          </div>
          
        </div>
        <div className="view_section te">
          <div className="img_sections item1">
            <img loading="lazy"
              src="https://images.pexels.com/photos/2432299/pexels-photo-2432299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="img_sections item2 ">
            <img loading="lazy"
              src="https://images.pexels.com/photos/6328411/pexels-photo-6328411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="img_sections item3">
            <img loading="lazy"
              src="https://images.pexels.com/photos/3488485/pexels-photo-3488485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
