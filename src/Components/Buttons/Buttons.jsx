import "./buttons.scss";
import { Link } from "react-router-dom";
function Buttons(props) {
  return (
    <Link to={props.link}>
      <button>{props.buttonText}</button>
    </Link>
  );
}

export default Buttons;
