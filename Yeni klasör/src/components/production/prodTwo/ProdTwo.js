import React from "react";
import { useTranslation } from "react-i18next";
import "./ProdTwo.scss";
import dref from "../../../assets/drefip.jpg";
import open from "../../../assets/openip.jpg";
import mob from "../../../assets/mopip.jpg";

const ProdTwo = () => {
  const { t } = useTranslation();

  return (
    <div id="prod-cont">
      <div id="prod-cont-two">
        <div id='prod-cont-two-title'>
          {t("İstenilen her renk ve kalitede üretim…")}
        </div>
        <div style={{ fontSize: '1.2em', marginBottom: '2em' }}>
          {t(
            "Seri üretimini yaptığımız ürünlerin yanı sıra istediğiniz renk ve kalitede ürünler de üretiyoruz."
          )}
        </div>
      </div>
      <div id="prod-cont-three">
        <img src={dref} alt="dref" id="dref-img" ></img>

        <table className="tables">
          <tr>
            <th>{t("PAMUKLU İP İÇERİK")}</th>
          </tr>
          <tr>
            <td>{t("Ne")}</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>{t("Nm")}</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>{t("Büküm")}</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>{t("Pamuk")}</td>
            <td>%55 - %85</td>
          </tr>
          <tr>
            <td>{t("Polyester")}</td>
            <td>%15 - %45</td>
          </tr>
          <tr>
            <th>{t("YÜN İP İÇERİK")}</th>
          </tr>
          <tr>
            <td>{t("Ne")}</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>{t("Nm")}</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>{t("Büküm")}</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>{t("Pamuk")}</td>
            <td>%20 - %30</td>
          </tr>
          <tr>
            <td>{t("Polyester")}</td>
            <td>%70 - %80</td>
          </tr>
        </table>
      </div>
      <div id="prod-cont-three">
        <img src={open} alt="dref" id="dref-img"></img>

        <table className="tables">
          <tr>
            <th>{t("PAMUKLU İP İÇERİK")}</th>
          </tr>
          <tr>
            <td>{t("Ne")}</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>{t("Nm")}</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>{t("Büküm")}</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>{t("Pamuk")}</td>
            <td>%55 - %85</td>
          </tr>
          <tr>
            <td>{t("Polyester")}</td>
            <td>%15 - %45</td>
          </tr>
          <tr>
            <th>{t("YÜN İP İÇERİK")}</th>
          </tr>
          <tr>
            <td>{t("Ne")}</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>{t("Nm")}</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>{t("Büküm")}</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>{t("Pamuk")}</td>
            <td>%20 - %30</td>
          </tr>
          <tr>
            <td>{t("Polyester")}</td>
            <td>%70 - %80</td>
          </tr>
        </table>
      </div>
      <div id="prod-cont-three">
        <img src={mob} alt="dref" id="dref-img" ></img>

        <table className="tables">
          <tr>
            <th>{t("PAMUKLU İP İÇERİK")}</th>
          </tr>
          <tr>
            <td>{t("Ne")}</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>{t("Nm")}</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>{t("Büküm")}</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>{t("Pamuk")}</td>
            <td>%55 - %85</td>
          </tr>
          <tr>
            <td>{t("Polyester")}</td>
            <td>%15 - %45</td>
          </tr>
          <tr>
            <th>{t("YÜN İP İÇERİK")}</th>
          </tr>
          <tr>
            <td>{t("Ne")}</td>
            <td>0,18 - 6,00</td>
          </tr>
          <tr>
            <td>{t("Nm")}</td>
            <td>0,30 - 10,00</td>
          </tr>
          <tr>
            <td>{t("Büküm")}</td>
            <td>2 - 11</td>
          </tr>
          <tr>
            <td>{t("Pamuk")}</td>
            <td>%20 - %30</td>
          </tr>
          <tr>
            <td>{t("Polyester")}</td>
            <td>%70 - %80</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProdTwo;
