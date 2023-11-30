import React from "react";
import "./connect.css";

const Connect = () => {
  return (
    <div className="connect_container">
      <h2 className="connect_title">connect with travellers</h2>
      <h3 className="connect_dest">
        These popular destinations have a lot to offer
      </h3>

      <div className="connect_cards">
        <div className="connect_single_cards">
            <img loading="lazy" src="https://gotrip-appdir.vercel.app/img/destinations/1/1.png" alt="" />
            <div className="gj">

            <h3 className="country">turkey</h3>
            <h4 className="followers">114k travellers</h4>
            </div>
        </div>
        <div className="connect_single_cards">
            <img loading="lazy" src="https://gotrip-appdir.vercel.app/img/destinations/1/2.png" alt="" />
            <div className="gj">

            <h3 className="country">france</h3>
            <h4 className="followers">114k travellers</h4>
            </div>
        </div>
        <div className="connect_single_cards">
            <img loading="lazy" src="https://gotrip-appdir.vercel.app/img/destinations/1/5.png" alt="" />
            <div className="gj">

            <h3 className="country">united states</h3>
            <h4 className="followers">114k travellers</h4>
            </div>
        </div>
        <div className="connect_single_cards">
            <img loading="lazy" src="https://gotrip-appdir.vercel.app/img/destinations/1/4.png" alt="" />
            <div className="gj">
            <h3 className="country">spain</h3>
            <h4 className="followers">114k travellers</h4>
            </div>
        </div>
        <div className="connect_single_cards">
            <img loading="lazy" src="https://gotrip-appdir.vercel.app/img/destinations/1/3.png" alt="" />
            <div className="gj">

            <h3 className="country">canada</h3>
            <h4 className="followers">114k travellers</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
