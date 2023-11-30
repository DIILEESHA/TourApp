// ScrollToTopIcon.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopIcon.css"; // Create this CSS file for styling if needed

const ScrollToTopIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Adjust the threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-to-top-icon ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp  className="dvc"/>
    </div>
  );
};

export default ScrollToTopIcon;
