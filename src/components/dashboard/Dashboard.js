import React from "react";
import AboutUs from "../aboutUs/AboutUs";
import Carousel from "../carousel/Carousel";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <div id="dash-main">  
    <div>
    <Carousel></Carousel>
    </div>
     <div > <AboutUs ></AboutUs></div>
     
    </div>
  );
};

export default Dashboard;
