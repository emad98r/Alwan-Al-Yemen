import Buttons from "../../Components/Buttons/Buttons";
import "./submit.scss";
import gif from "../../assets/imgs/message submited.gif";
import Titles from "../../Components/Titles/Titles";
function Submit() {
  return (
    <div className="submit">
      <div className="container">
        <Titles title="تم استلام رسالتك شكراً لكم على ثقتكم بنا" />
        <img src={gif} alt="" />
        <Buttons buttonText="العودة الى الصفحة الرئسية" link="/Home" />
      </div>
    </div>
  );
}

export default Submit;
