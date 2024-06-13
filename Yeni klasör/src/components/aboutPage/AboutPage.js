import React from "react";
import "./AboutPage.scss";
import machine from "../../assets/machine.jpg";
import AboutChapOne from "./aboutChapOne/AboutChapOne";
import AboutChapTwo from "./aboutChapTwo/AboutChapTwo";
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div id="about-img" style={{ backgroundImage: `url(${machine})` }}>
       <div id="prod-back">
       <div id="main-titles" >
          {t('Hakkımızda')}
        </div>
        <div
          id="main-titles-two"
        >
          {t(' Tecrübemiz , İşimiz , Kalitemiz ...')}
         
        </div>
       </div>
      </div>
      <div>
        <AboutChapOne></AboutChapOne>
      </div>
      <div>
        <AboutChapTwo></AboutChapTwo>
      </div>
    </div>
  );
};

export default AboutPage;
