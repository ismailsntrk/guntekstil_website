import React from "react";
import './Contact.scss'
import contact from "../../assets/contact.jpg";
import Form from "./form/Form";
import CustomGoogleMapWithMarker from "./maps/CustomGoogleMapWithMarker";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact-cont">
      {" "}
      <div
        id="about-img"
        style={{
          height:'40em',
          backgroundImage: `url(${contact})`,
          backgroundPosition: "top",
        }}
      >
      <div id="prod-back" >
      <div id="main-titles"> {t("İLETİŞİM")} </div>
        <div id="main-titles-two"> {t("Bize Ulasin")} </div>
      </div>
      </div>
      <div style={{ width: "100%", height: "49vh", marginTop: "2em" }}>
        <CustomGoogleMapWithMarker></CustomGoogleMapWithMarker>
      </div>
      <div>
        <Form></Form>
      </div>
    </div>
  );
};

export default Contact;
