import React from "react";
import "./saying.css";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const Saying = () => {
  return (
    <div className="say_container">
      <div className="say_card">
        <div className="say_min_card">
          <h2 className="say_title">What our customers are saying us?</h2>
          <p className="say_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, consequatur obcaecati dignissimos eos magnam
            accusantium facilis sint sequi eveniet delectus?
          </p>
          <div className="happy_ppl">
            <div className="count">
              <h3 className="counter">13m+</h3>
              <h4 className="counting">happy people</h4>
            </div>
            <div className="count">
              <h3 className="counter">4.8</h3>
              <h4 className="counting">overall rating</h4>
              <div className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
        </div>
        <div className="say_min_card"></div>
      </div>
        <div className="truster">
          <h2 className="trusting">Trusted by the world’s best</h2>

          <div className="trusters">
            <div className="trust">
              <img loading="lazy"
                src="https://gotrip-appdir.vercel.app/img/clients/1.svg"
                alt=""
              />
            </div>
            <div className="trust">
              <img loading="lazy"
                src="https://gotrip-appdir.vercel.app/img/clients/2.svg"
                alt=""
              />
            </div>
            <div className="trust">
              <img loading="lazy"
                src="https://gotrip-appdir.vercel.app/img/clients/3.svg"
                alt=""
              />
            </div>
            <div className="trust">
              <img loading="lazy"
                src="https://gotrip-appdir.vercel.app/img/clients/4.svg"
                alt=""
              />
            </div>
            <div className="trust">
              <img loading="lazy"
                src="https://gotrip-appdir.vercel.app/img/clients/5.svg"
                alt=""
              />
            </div>
            <div className="trust">
              <img loading="lazy"
                src="https://gotrip-appdir.vercel.app/img/clients/6.svg"
                alt=""
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Saying;
