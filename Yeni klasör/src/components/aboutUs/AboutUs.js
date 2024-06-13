import React from "react";
import "./AboutUs.scss";
import konteynir from "../../assets/konteynir.jpg";
import ucgen from "../../assets/ucgen.jpg";
import "animate.css/animate.min.css";
import smile from "../../assets/smile.png";
import forest from "../../assets/forest.png";
import medal from "../../assets/medal.png";
import arge from "../../assets/arge.jpg";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div id="about-us">
      <div id="about-cont">
        <div className="arge-item">
          <img src={arge} alt="arge" className="arge-img"></img>
          <div className="arge-p">
            {t(
              "AR-GE Ar-Ge ofisimizde farklı iplikler, dokuma teknikleri ve apre çeşitleri ile müşteri talepleri ve trendler doğrultusunda yenilikçi çözümler sunulmaktadır."
            )}
          </div>
        </div>

        <div className="arge-item">
          <div className="arge-p">
            {t(
              "Müşterilerimize en uygun maliyetlerle yüksek kaliteli ürün ve hizmetleri sunarken, aynı zamanda zamanında teslimatları sağlamaktayız. Bu denge sayesinde müşterilerimize rekabetçi bir avantaj sağlarken, iş süreçlerinde verimliliği artırmak ve memnuniyeti en üst düzeye çıkarmak hedefimizdir."
            )}
          </div>
          <img src={ucgen} alt="arge" className="arge-img"></img>
        </div>

        <div className="arge-item">
          <img src={konteynir} alt="arge" className="arge-img"></img>
          <div className="arge-p">
            {t(
              "Firmamız dünyanın her yerine taşıma hizmeti sunmaktadır. Sizlerin yüklerini, zamanında ve güvenilir bir şekilde hedef noktalara ulaştırmak için en iyi çözümleri sunmaktayız. Size özel çözümlerimiz ve global ağımızla, uluslararası transport ihtiyaçlarınızı karşılamak için buradayız."
            )}
          </div>
        </div>

        <div id="export">
          <div style={{ fontSize: "5em", fontWeight: "bold" }}>
            {t("İhracat Alanları")}
          </div>
          <div>
            {t(
              "Firmamız Konfeksiyon sektörü için başta Avrupa ülkeleri olmak üzere dokuma kumaş tedarik etmektedir. Satış ve pazarlama faaliyetleri ile üretim kapasitesini arttırarak Global ve Yurtiçi pazarda her geçen yıl ihracat bölgelerine yükselmekteyiz."
            )}
          </div>
          <div id="prog-bar">
            <div id="prog-item-one">{t("Avrupa")}</div>
            <div id="prog-item-two"> {t("Asya")} </div>
            <div id="prog-item-three"> {t("USA")} </div>
          </div>
        </div>
        <div id="quality">
          <div className="qua-items">
            <div id="icons">
              <img src={medal} alt="forest"></img>{" "}
            </div>
            <strong
              style={{
                fontWeight: "bolder",
                fontSize: "1.3em",
                marginBottom: "1em",
              }}
            >
              {" "}
              {t("YÜKSEK KALİTE")}
            </strong>
            <div style={{ width: "80%" }}>
              {t(
                "Dünya standartlarında iplik üretimi için kaliteden ödün vermiyoruz."
              )}
            </div>
          </div>
          <div className="qua-items">
            <div id="icons">
              <img src={smile} alt="forest"></img>{" "}
            </div>
            <strong
              style={{
                fontWeight: "bolder",
                fontSize: "1.3em",
                marginBottom: "1em",
              }}
            >
              {t("MÜŞTERİ MEMNUNİYETİ")}
            </strong>
            <div style={{ width: "80%" }}>
              {t(
                "İş süreçlerimizin tümünde %100 müşteri memnuniyetini hedefliyoruz."
              )}
            </div>
          </div>
          <div className="qua-items">
            <div id="icons">
              <img src={forest} alt="forest"></img>{" "}
            </div>
            <strong
              style={{
                fontWeight: "bolder",
                fontSize: "1.3em",
                marginBottom: "1em",
              }}
            >
              {" "}
              {t("ÇEVRE DOSTU ÜRETİM")}{" "}
            </strong>
            <div style={{ width: "80%" }}>
              {t(
                "Geri Kazanılmış ham maddeleri yeniden kullanarak çevreye dost bir üretim politikası sürdürüyoruz."
              )}
            </div>
          </div>
        </div>
        <div id="about-title">
          {t("İpliklerimizle dokuduğumuz sürdürülebilir bir dünya.")}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
