import SectionsComp from "../Components/SectionsComp/SectionsComp";
import Titles from "../Components/Titles/Titles";
import "./activities.scss";
import HallsComp from "../Components/HallsComp/HallsComp";

import meetingHall from "../assets/imgs/meating hall.jpg";
import weddings from "../assets/imgs/weddings.jpg";
import partys from "../assets/imgs/partys.jpg";
import schoolPartys from "../assets/imgs/school partys.jpg";
import mainHall_1_2 from "../assets/imgs/main hall 1-2.jpg";
import vipHall from "../assets/imgs/vip hall.jpg";
import royelHall from "../assets/imgs/royel hall.jpg";
import bigMeatingHall from "../assets/imgs/big meating hall.jpg";
import familiesHall from "../assets/imgs/families section.jpg";
import chlidernPgBg from "../assets/imgs/bg 1.jpg";
import p1 from "../assets/imgs/bg 3.jpg";
import p2 from "../assets/imgs/bg 2.jpg";
import p3 from "../assets/imgs/bg 7.jpg";
import p4 from "../assets/imgs/bg 4.jpg";
import p5 from "../assets/imgs/bg 5.jpg";
import p6 from "../assets/imgs/bg 6.jpg";

function Activities() {
  return (
    <>
      <div className="activities">
        <div className="container">
          <Titles title="فعاليات متنوعة داخل المطعم" />
          <div className="wrapper">
            <SectionsComp img={meetingHall} sectionTitle="قاعة الاجتماعات" />
            <SectionsComp img={weddings} sectionTitle="أعراس" />
            <SectionsComp img={partys} sectionTitle="احتفالات وتكريم" />
            <SectionsComp img={schoolPartys} sectionTitle="حفلات تخرج" />
          </div>
        </div>
      </div>
      <div className="the-halls">
        <div className="container">
          <Titles title="القاعات و الصالات في المطعم" />
          <div className="wrapper">
            <HallsComp
              img={mainHall_1_2}
              sectionTitle="الصالات الرئيسية - (الصالة 1 والصالة 2)"
              p="تستقبل هاتين الصالتين عامة الناس من مختلف الطبقات، حيث تم تجهيزها بأحدث التقنيات لتتناسب مع جميع الأذواق، بما في ذلك الجلسات العربية، وتتسع الصالتين لـ 300 شخص."
            />
            <HallsComp
              img={vipHall}
              sectionTitle="صالة كبار الضيوف (VIP)"
              p="تم تصميم صالة (VIP) خصيصاً لتوفير تجربة راقية، فهي مجهزة بمساحة واسعة تبلغ 280 متر مربع، بأحدث المواصفات لتوفير أجواء مريحة وخدمات متميزة."
            />
            <HallsComp
              img={royelHall}
              sectionTitle="القاعة الملكية"
              p="تُعرف الصالة الملكية بمساحتها الواسعة التي تصل إلى 560 متر مربع، وهي مجهزة بأحدث التقنيات لتناسب:"
              list1="العزائم أو الضيافات الكبيرة."
              list2="الأعراس والحفلات."
              list3="الندوات والمعارض التجارية."
              list4="المناسبات والاجتماعات المغلقة."
            />
            <HallsComp
              img={bigMeatingHall}
              sectionTitle="قاعة الاجتماعات والمحاضرات"
              p="تم تصميم هذه القاعة لعقد الاجتماعات والأعمال الخاصة، حيث تجمع بين الإطلالات الجميلة والخصوصية، وتضم مدخلاً خاصاً للحمامات."
            />
            <HallsComp
              img={familiesHall}
              sectionTitle="صالة العائلات"
              p="يعتبر اليمن بلداً شرقياً، لذا تم تجهيز صالة العائلات بأحدث أجهزة التكييف، ومصلى خاص للنساء مع فريق نسائي، لتوفير أجواء عائلية هادئة مع تشكيلة واسعة من الأطباق العربية المميزة والمشاوي والمقبلات."
            />
          </div>
        </div>
      </div>

      <div className="kids-playground">
        <div className="container">
          <Titles title="حديقة ترفيهية للأطفال" />
          <img className="big-img" src={chlidernPgBg} alt="" />
          <div className="img-wrapper">
            <img src={p1} alt="" />
            <img src={p2} alt="" />
            <img src={p3} alt="" />
            <img src={p4} alt="" />
            <img src={p5} alt="" />
            <img src={p6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Activities;
