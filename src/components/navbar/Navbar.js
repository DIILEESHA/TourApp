import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`nav_container ${isSticky ? "sticky" : ""}`}>
      <div className="nav_divide_container">
        <div className="nav_left_container">
          <h1 className="nav_title">Tour.Mate</h1>

          <div className="nav_search">
            <FaSearch className="ci" />
            <input
              type="text"
              className="nav_search_input"
              placeholder="Enter Your Destination"
            />
          </div>
        </div>
        <div className="nav_right_container">
          <div className="nav_right_elements">
            <h2 className="nav_usd">
              usd
              <IoMdArrowDropdown />
            </h2>
            <span className="j">|</span>

            <div className="lanuage">
              <img
                loading="lazy"
                className="lan_circle"
                src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fgeneral%2Flang.png&w=32&q=75"
                alt=""
              />
              <h3 className="nav_usder">united states</h3>
              <IoMdArrowDropdown className="p" />
            </div>
          </div>

          <div className="btn_nav">
            <button className="nav_btner">become an expert </button>
            <button className="nav_btns2">sign in / register</button>
          </div>
          <div className="hamburger_menu" onClick={() => setOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} className="fa-thin" />
          </div>
          <div
            className="menu_option "
            style={{ right: isOpen ? "0px" : "-50vw" }}
          >
            <div className="closer">
              <IoIosClose className="cl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
