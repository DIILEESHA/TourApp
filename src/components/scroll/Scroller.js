import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Scroller = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Adjust the scroll position range based on your design
    if (scrollPosition > 200 && scrollPosition < 500) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#price">Price</Link>
          </li>
          <li>
            <Link to="/#list">List</Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div>
        {/* Your other content goes here */}
        <div style={{ height: "1000px" }}>
          Scroll down to see the effect
        </div>

        {/* Display Price and List dynamically */}
        {showInfo && (
          <div>
            <div id="price">Price: $100</div>
            <div id="list">Your List</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scroller;
