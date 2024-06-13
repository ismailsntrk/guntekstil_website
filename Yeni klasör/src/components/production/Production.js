import React from "react";
import "./Production.scss";
import { useTranslation } from 'react-i18next';
import production from "../../assets/production.jpg";
import ProdTwo from "./prodTwo/ProdTwo";

const Production = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        id="about-img"
        style={{
          backgroundImage: `url(${production})`,
          backgroundPosition: "bottom",
        }}
      >
        <div id="prod-back">
          <div id="main-titles">{t('Üretim')}</div>
          <div id="main-titles-two">{t('Tecrübemiz , İşimiz , Kalitemiz ...')}</div>
        </div>
      </div>
      <div></div>
      <div>
        <ProdTwo></ProdTwo>
      </div>
    </div>
  );
};

export default Production;
