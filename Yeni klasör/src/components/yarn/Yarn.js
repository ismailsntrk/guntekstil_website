import React from "react";
import "./Yarn.scss";
import fiber from "../../assets/fiber.jpg";
const Yarn = () => {
  return (
    <div id="ben">
      <div
        id="about-img"
        style={{
          backgroundImage: `url(${fiber})`,
          backgroundPosition: "center",
          color: "black",
        }}
      >
        <div id="main-titles" style={{ fontSize: "7em" }}>
          Iplik
        </div>
        <div
          id="main-titles-two"
          style={{ fontSize: "2.5em", marginBottom: "4em" }}
        >
          Tecrübemiz , İşimiz , Kalitemiz ...
        </div>
      </div>
      <div>aboutChapTwo</div>
      <div>b</div>
    </div>
  );
};

export default Yarn;
