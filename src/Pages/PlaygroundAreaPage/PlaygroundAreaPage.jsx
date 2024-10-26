import "./Playground-area.scss";
import Titles from "../../Components/Titles/Titles";
import banner from "../../assets/imgs/kids banner.jpg";

import pg1 from "../../assets/imgs/bg 1.jpg";
import pg2 from "../../assets/imgs/bg 2.jpg";
import pg3 from "../../assets/imgs/bg 3.jpg";
import pg4 from "../../assets/imgs/bg 4.jpg";
import pg5 from "../../assets/imgs/bg 5.jpg";
import pg6 from "../../assets/imgs/bg 6.jpg";
import pg7 from "../../assets/imgs/bg 7.jpg";
import pg8 from "../../assets/imgs/bg 8.jpg";
import pg9 from "../../assets/imgs/bg 9.jpg";
function PlaygroundAreaPage() {
  return (
    <div className="Playground-area">
      <div className="container">
        <img src={banner} alt="" className="banner" />
        <Titles title="الحديــقة" />
        <div className="wrapper">
          <img src={pg1} alt="" />
          <img src={pg2} alt="" />
          <img src={pg3} alt="" />
          <img src={pg4} alt="" />
          <img src={pg5} alt="" />
          <img src={pg6} alt="" />
          <img src={pg7} alt="" />
          <img src={pg8} alt="" />
          <img src={pg9} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PlaygroundAreaPage;
