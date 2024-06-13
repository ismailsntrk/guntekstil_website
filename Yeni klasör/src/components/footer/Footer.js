import React from "react";
import "./Footer.scss";
import play from "../../assets/play.png";
import flag from "../../assets/turkey.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div id="footer-cont">
      <div id="footer-part-one">
        <div id="foot-title">{t('Bize Ulaşın')}</div>
        <div id="foot-p">
          {t("YARDIMCI OLABILECEGIMIZ HERHANGI BIR SORUNUZ MU VAR ?")}
        </div>
        <div id="foot-btn">
          <img src={play} alt="play" style={{ width: "20%" }}></img>
          <div>{t("İLETİŞİM") }</div>
        </div>
      </div>
      <div id="footer-part-two">
        <div id="fone">
          <img id="flag" src={flag} alt="flag"></img>
        </div>
        <div id="ftwo">
          GUN İplik Tekstil San. ve Tic. Ltd. Şti. © 1989 - 2023. | Her Hakkı
          Saklıdır
        </div>
        <div id="fthree"></div>
      </div>
    </div>
  );
};

export default Footer;
