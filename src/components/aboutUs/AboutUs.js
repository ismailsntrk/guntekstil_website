import React from "react";
import "./AboutUs.scss";
import konteynir from "../../assets/konteynir.jpg";
import "animate.css/animate.min.css";
import smile from "../../assets/smile.png";
import forest from "../../assets/forest.png";
import medal from "../../assets/medal.png";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div id="about-us">
      <div id="about-cont">
        <div id="arge-item-cont">  
          <div id="about-text-main">
            <h1>
              {t(
                "Gün Tekstil: İplik Bükümü ve Katlamada Mükemmeliyetin Öncüsü"
              )}
            </h1>
            <p>
              {t("Gün Tekstil, tekstil endüstrisinin öncüsü olarak, 'iplik büküm ve katlama' işlemlerine özel olarak odaklanmaktadır. Mükemmeliyet taahhüdü ve tekstil zanaatına duyulan tutkuyla, sektörde lider bir oyuncu olma hedefinde kendimizi konumlandırdık.")}
              <br></br>
              <br></br>{" "}
              {t(`Temel uzmanlığımız, iplik manipülasyonunun karmaşık sanatında yatar; bu da ipliklerin kalitesini, dayanıklılığını ve dokusunu artırmada kritik bir rol oynar, sonuç olarak üst düzey tekstil ürünleri ortaya çıkar. Moda, ev tekstili veya endüstriyel uygulamalar için olsun, deneyimli ekibimiz her ipliğin en yüksek standartları karşıladığından emin olur.`)}{" "}
              <br></br>
              <br></br>
              {t(`Gelişmiş teknolojiyi benimseyerek, son teknoloji makinelerle donatılmış modern tesislerimizle müşterilerimize yenilikçi çözümler ve premium kalitede iplik sağlamaktayız.`)}
              <br></br>
              <br></br>
              {t(`Gün Tekstil'de her şeyin merkezinde kalite bulunmaktadır. Müşterilerimize beklentilerini sadece karşılamakla kalmayıp aşan iplikler sunmak için üretimin her aşamasında sıkı kalite kontrol önlemleri uygulanmaktadır. Uluslararası standartlara uymamız, üst düzey tekstil çözümleri arayan işletmeler için güvenilir bir ortak olduğumuzu gösterir.`)}
            </p>
          </div>
          <img src={konteynir} alt=""></img>
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
