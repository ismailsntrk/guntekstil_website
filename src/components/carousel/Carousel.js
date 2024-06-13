import React from "react";
import "swiper/css";
import "./SwiperStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "./Carousel.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import caro1 from "../../assets/caro1.jpg";
import caro2 from "../../assets/caro2.jpg";
import caro3 from "../../assets/caro3.jpg";
import caro4 from "../../assets/caro4.jpg";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const { t } = useTranslation();
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${caro1})` }}
        >
          <div id="prod-back">
            <div id="main-titles" style={{ marginTop: "2em" }}>
              {t("PERFORMANS ÇÖZÜMLERİ ÜRETİYORUZ")}
              
            </div>
            <div id="main-titles-two">
              {t("İŞ BİRLİĞİ. ÜRETİM. SONUÇ. TESLİM")}
              
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${caro2})` }}
        >
          <div id="prod-back">
            <div id="main-titles" style={{ marginTop: "2em" }}>
            {t("ZENGİN ÜRÜN YELPAZESİ")}
              
            </div>
            <div id="main-titles-two">
            {t("FARKLI RENK VE BÜKÜM SEÇENEKLERİ")}
              
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${caro3})` }}
        >
          <div id="prod-back">
            <div id="main-titles" style={{ marginTop: "2em" }}>
            {t("DİNAMİK ÜRETİM")}
             
              
            </div>
            <div id="main-titles-two">
              {t("DOKUMA. EN İYİ KUMAŞ, PAZARLAMA")}
              </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url(${caro4})` }}
        >
          <div id="prod-back">
            <div id="main-titles" style={{ marginTop: "2em" }}>
              {t("ZAMANINIZI KORUYUN")}
              
            </div>
            <div id="main-titles-two">
              {t("NİTELİKLİ PERSONEL. TECRÜBE. SAYGI")}
             
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
