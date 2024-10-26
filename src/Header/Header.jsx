import "./header.scss";
import { useState } from "react";
import logo from "../assets/icons/black bg logo 2.svg";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  function handleNavToggle() {
    setNavOpen(!isNavOpen);
  }
  return (
    <>
      <header>
        <div className="container">
          <Link to="/home">
            {" "}
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <nav>
            <IoMenu className="menu" onClick={handleNavToggle} />
            <MdCancel className="cancel-menu" />
            {isNavOpen && (
              <ul
                className="navBar"
                style={{ animation: "navFormTop 1s ease-in-out", top: "5em" }}
              >
                <li>
                  <Link to="/Home">الصفحة الرئيسية</Link>
                </li>
                <li>
                  <Link to="/AboutUs">من نحن</Link>
                </li>
                <li>
                  <Link to="/Menu">منيو</Link>
                </li>
                <li>
                  <Link to="/ContactUs">اتصل بنا</Link>
                </li>
              </ul>
            )}
            <ul className="navBar2">
              <li>
                {" "}
                <Link to="/Home">الصفحة الرئيسية</Link>
              </li>
              <li>
                <Link to="/AboutUs">من نحن</Link>
              </li>
              <li>
                <Link to="/Menu">منيو</Link>
              </li>
              <li>
                <Link to="/ContactUs">اتصل بنا</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
