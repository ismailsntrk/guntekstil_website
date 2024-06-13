import React from "react";
import "./AboutChatTwo.scss";
import mission from "../../../assets/mission.jpg";
import { useTranslation } from "react-i18next";
const AboutChapTwo = () => {
  const { t } = useTranslation();
  return (
    <div
      id="chap-two"
      style={{
        backgroundImage: `url(${mission})`,
        filter: "sepia(40%)",
        backgroundPosition: "center",
      }}
    >
      <div id="vision">
        <div className="mission">
          <div id="vis-tit">
            {t('Vizyonumuz')}
          </div>
          <div>
            <ul id="vis-p">
              <li>
               {t("Müşterilerimiz ve üretim ortaklarımızla karşılıklı ve sürdürülebilir büyümeyi gerçekleştirmek.")}
              </li>
              <li>
               {t("Sektörümüzde, uyguladığımız sosyal sorumluluk ilkeleri ile uluslar arası alanda belirleyici olmak.")}
              </li>
              <li>
               {t("Son teknoloji ve süreç uygulamaları ile sektöre yeni hizmetler sunmak ve lider konumda olmak.")}
              </li>
              <li>
{t("Tedarik zinciri boyunca yer alan tüm süreçlerimizi bilişim teknolojileri ile entegre ederek müşterilerimizin artan üretim ihtiyaçlarına cevap vermek.")}
              </li>
              <li>
                {t("Üretim süreçlerini kısaltmak için müşterilerimiz ile ilişkilerimizi sürekli hale getirmek.")}
              </li>
              <li>
                {t("Süreç odaklı kalite yönetim sistemini uygulamak.")}
              </li>
            </ul>
          </div>
        </div>
        <div className="mission">
          <div id="mis-tit">
            {t("Misyonumuz")}
          </div>
          <div>
            <ul id="mis-p">
              <li>
                {t("Amacımız müşterilerimizin beklentilerine tamamiyle cevap verebilmek, firmamızın rekabet ve gelişim gücünü arttırabilmektir.")}
              </li>
              <li>
                {t("Hizmette hedefimiz “İlk Seferde Doğru Yapmak” ve “Sıfır Hata”dır. İmal etmekte olduğumuz hizmetlerin zamanında, eksiksiz ve problemsiz olarak teslim edilmesi vazgeçilemez bir ilkedir.")}
              </li>
              <li>
                {t("Ar/Ge ve Hizmet Geliştirme faaliyetlerindeki hedefimiz; bilgimizi ve üreticiliğimizi sürekli olarak geliştirerek, müşteri memnuniyeti ve rekabet için etkin hizmetler tasarlamaktır.")}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="policies">
        <div id="pol-tit" >
          {t("Kalite Politikalarımız")}
        </div>
        <div>
          {" "}
          <ul id="pol-p">
          
            <li>
              {t("Şirketimizin yetenek ve kapasitesi doğrultusunda, müşterilerimizin tüm hizmet beklentilerini dünya standartlarında karşılamak,")}
            </li>
            <li>
              {t("Ülke ve bölge ekonomisine katkıda bulunmak,")}
            </li>
            <li>
             {t("Mevcut ve yeni hizmetlerimiz ile faaliyet bölgelerimizin gelişiminde önemli roller alarak, sürekli girişimci olmak,")}
            </li>
            <li>
              {t("Yenilikçi bir şirket olarak, geleceği şekillendirme arzusu ve insanlığa faydalı olan yenilikler üretme konusundaki kararlılığının arkasında durmak,")}
            </li>
            <li> {t("İnsana odaklı çalışmayı temel almak,")} </li>
            <li> {t("Tüm kalite planlarını müşteri memnuniyetine dayandırmak,")} </li>
            <li>
          {t("Konusunda uzman personel kadrosu ile çalışmayı ilke edinmek,")}
            </li>
            <li>
        {t("Yalnızca bulunduğu bölgede değil ülke ve hatta dünya çapında bir marka olmak…")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutChapTwo;
