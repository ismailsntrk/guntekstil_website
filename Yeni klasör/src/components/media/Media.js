import React from "react";
import media from "../../assets/media.jpg";
import MediaChapOne from "./mediaChapOne/MediaChapOne";
const Media = () => {
  return (
    <div>
      {" "}
      <div id="about-img" style={{ backgroundImage: `url(${media})` }}>
        <div id="prod-back">
          <div id="main-titles">Medya</div>
          <div id="main-titles-two">Tecrübemiz , İşimiz , Kalitemiz ...</div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <MediaChapOne></MediaChapOne>
      </div>
    </div>
  );
};

export default Media;
