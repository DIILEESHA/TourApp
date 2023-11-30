import React from "react";
import "./home.css";
import Navbar from "../navbar/Navbar";
import View from "../view/View";
import Why from "../why/Why";
import Connect from "../connect/Connect";
import Mainseller from "../seller/mainseller/Mainseller";
import Saying from "../happysaying/Saying";
import Blog from "../blog/Blog";
import Subscribe from "../subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <View />
      <Why />
      <Connect />
      <Mainseller />
      <Saying />
      <Subscribe />
    </div>
  );
};

export default Home;
