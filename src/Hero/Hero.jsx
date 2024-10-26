import "./hero.scss";
import heroImg from "../assets/imgs/hero img 1.png";
import Buttons from "../Components/Buttons/Buttons";
function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} alt="" />
      <div className="hero-wrapper">
        <p>
          نقدم لكم تجربة مميزة تنقلكم إلى قلب اليمن مع كل لقمة استمتعوا بأشهى
          الأطباق التقليدية المحضرة بأيدي أمهر الطهاة باستخدام أفضل المكونات
          الطازجة{" "}
        </p>
        <Buttons buttonText=" عرض المنيو" link="/Menu" />
      </div>
    </div>
  );
}

export default Hero;
