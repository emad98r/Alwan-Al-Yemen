import "./footer.scss";
import logo from "../assets/icons/black bg logo 2.svg";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/home">
            {" "}
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <div className="s-m">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaTelegramPlane />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="copy-rights">
        <p>جميع الحقوق محفوظة لمطعم الوان اليمن @ 2024</p>
        <p>
          Designed by{" "}
          <a href="https://emadrashad.com/" target="_black">
            Emad Rashad
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
