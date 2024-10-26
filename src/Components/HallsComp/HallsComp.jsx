import "./halls-comp.scss";

function HallsComp(props) {
  return (
    <div className="halls-comp">
      <img src={props.img} alt="" />
      <div className="halls-wrapper">
        <h3>{props.sectionTitle}</h3>
        <p>{props.p}</p>
        <ul>
          <li>{props.list1}</li>
          <li>{props.list2}</li>
          <li>{props.list3}</li>
          <li>{props.list4}</li>
        </ul>
      </div>
    </div>
  );
}

export default HallsComp;
