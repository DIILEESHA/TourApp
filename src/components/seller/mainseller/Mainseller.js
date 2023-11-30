import React, { useState } from "react";
import "./mainseller.css";
import Hotels from "../hotels/Hotels";
import Tour from "../tour/Tour";
import hotelsData from "../hotels/hotels.json";

const Mainseller = () => {
  const [selectedType, setSelectedType] = useState("hotel");

  const handleTypeChange = (event, type) => {
    event.preventDefault(); // Prevent the default behavior of the link click
    setSelectedType(type);
  };

  return (
    <div className="mainseller_container">
      <div className="main_seller">
        <div className="mainseller_left">
          <h2 className="mainseller_title">best seller</h2>
          <h4 className="mainseller_para">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h4>
        </div>
        <div className="mainseller_left">
          <ul className="mainseller_ul">
            <li className="mainseller_li">
              <a
                href="/hotel"
                className={selectedType === "hotel" ? "active" : ""}
                onClick={(event) => handleTypeChange(event, "hotel")}
              >
                hotel
              </a>
            </li>
            <li className="mainseller_li">
              <a
                href="/tour"
                className={selectedType === "tour" ? "active" : ""}
                onClick={(event) => handleTypeChange(event, "tour")}
              >
                tour
              </a>
            </li>
            <li className="mainseller_li">activity</li>
            <li className="mainseller_li">car</li>
            <li className="mainseller_li">cruise</li>
            <li className="mainseller_li">flights</li>
          </ul>
        </div>
      </div>
      {selectedType === "hotel" && <Hotels hotels={hotelsData} />}
      {selectedType === "tour" && <Tour />}
    </div>
  );
};

export default Mainseller;
