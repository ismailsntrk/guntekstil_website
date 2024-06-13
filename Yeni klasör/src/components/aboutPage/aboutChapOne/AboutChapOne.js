import React from "react";
import "./AboutChapOne.scss";
import yarn from "../../../assets/yarn.jpg";
import { useTranslation } from "react-i18next";

const AboutChapOne = () => {
  const { t } = useTranslation();
  return (
    <div id="chap-one">
      <img id="yarn" src={yarn} alt="Yarn" />
      <div id="yarn-p">
        <h1 id="abo-tit">{t("GUN TEKSTIL")}</h1>
        <div id="abo-exp">
          <p>{t("İşimiz, tekstil artıklarını özenle seçerek onları elyafa dönüştürmekle başlıyor. Bu elyaflar, bizim için gerçek bir hazine çünkü onlardan kaliteli iplikler üretiyoruz. Bu iplikler, giyimden ev tekstiline kadar birçok farklı alanda kullanılıyor. Hayal edebileceğiniz her türlü üründe bizim elyaf ve ipliklerimizin izlerini bulabilirsiniz.")}</p>
          <p>{t("Elbette, ipliklerimizin bükümlerini de özenle yapıyoruz. Sonuç olarak, dayanıklı ve esnek iplikler elde ediyoruz. Böylece sizlere, uzun süre dayanan ve rahat giyilen ürünler sunabiliyoruz.")}</p>
          <p>{t("Bizim için sadece kaliteli ürünler üretmek yetmez. Aynı zamanda çevreye olan duyarlılığımızı da önemsiyoruz. Tekstil atıklarını geri dönüştürerek, kaynakları daha etkin bir şekilde kullanmanın yanı sıra, doğaya olan etkimizi de en aza indiriyoruz. Sizlerin de bu sürdürülebilir çabamıza katılmanızı ve gelecek nesillere daha iyi bir dünya bırakmamıza yardımcı olmanızı umuyoruz.")}</p>
          <p>{t("Biz, dost canlısı ve samimi bir ekibiz. Müşteri memnuniyeti bizim için her zaman önceliklidir ve size en iyi hizmeti sunmak için sürekli çalışıyoruz. Sorularınızı yanıtlamaktan ve ihtiyaçlarınızı karşılamaktan mutluluk duyarız.")}</p>
          <p>{t("Tekstil geri dönüşümünde uzmanlaşmış bir işletme olarak, sizlere kaliteli ürünler sunmak ve dostça bir ilişki kurmak için buradayız. Lider konumumuzu korurken sürekli olarak kendimizi geliştirmeye devam ediyoruz.")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutChapOne;
