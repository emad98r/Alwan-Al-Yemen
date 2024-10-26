import "./sections_comp.scss";
import { Link } from "react-router-dom";

function SectionsComp(props) {
  return (
    <div className="section">
      <Link to={props.page}>
        <img src={props.img} alt="" />
        <h3>{props.sectionTitle}</h3>
      </Link>
    </div>
  );
}

export default SectionsComp;
