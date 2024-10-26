import "./sections.scss";
import Titles from "../Components/Titles/Titles";
import fastFood from "../assets/imgs/fast food section.jpg";
import playgroundSection from "../assets/imgs/playground section.jpg";
import juicesSection from "../assets/imgs/juices section.png";
import sweetsSection from "../assets/imgs/sweets section.png";
import mealsSection from "../assets/imgs/meals section.png";
import SectionsComp from "../Components/SectionsComp/SectionsComp";
import Buttons from "../Components/Buttons/Buttons";

function Sections() {
  return (
    <div className="sections">
      <div className="container">
        <Titles title="اقسام المطعم" />
        <div className="sections-wrapper">
          <SectionsComp
            img={fastFood}
            sectionTitle="الوجبات السريعة"
            page="/FastFoodPage"
          />
          <SectionsComp
            img={playgroundSection}
            sectionTitle=" الـحـديـقـة"
            page="/PlaygroundAreaPage"
          />
          <SectionsComp
            img={juicesSection}
            sectionTitle=" العصائر"
            page="/JuicesPage"
          />
          <SectionsComp
            img={sweetsSection}
            sectionTitle=" الـحـلـويـات"
            page="/SweetsPage"
          />
          <SectionsComp
            img={mealsSection}
            sectionTitle=" الـوجـبـات"
            page="/MealPage"
          />
        </div>
      </div>
      <div className="ad">
        <Titles title="اكتشفوا لذة الحلويات اليمنية الأصيلة " />
        <p>استمتعوا بنكهة التراث في كل قضمة</p>
        <Buttons buttonText="قسم الحلويــــات" link="/SweetsPage" />
      </div>
    </div>
  );
}

export default Sections;
