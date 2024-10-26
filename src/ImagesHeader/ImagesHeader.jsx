import "./images header.scss";

import img1 from "../assets/imgs/a1.png";
import img2 from "../assets/imgs/a2.png";
import img3 from "../assets/imgs/a3.jpg";
import img4 from "../assets/imgs/a4.jpeg";
import img5 from "../assets/imgs/a5.jpeg";
import img6 from "../assets/imgs/a6.jpeg";
import img7 from "../assets/imgs/a7.png";
import img8 from "../assets/imgs/a8.png";
import img9 from "../assets/imgs/a9.png";
import img10 from "../assets/imgs/a10.png";

function ImagesHeader() {
  return (
    <div className="small-container">
      <div className="img-wrapper">
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
        <img src={img4} alt="img" />
        <img src={img5} alt="img" />
        <img src={img6} alt="img" />
        <img src={img7} alt="img" />
        <img src={img8} alt="img" />
        <img src={img9} alt="img" />
        <img src={img10} alt="img" />
      </div>
    </div>
  );
}

export default ImagesHeader;
