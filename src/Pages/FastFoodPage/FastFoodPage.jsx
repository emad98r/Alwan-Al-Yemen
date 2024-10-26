import "./fast-food.scss";
import Titles from "../../Components/Titles/Titles";
import FastFood from "../../Data/FastFood";
import banner from "../../assets/imgs/fast food banar.jpg";
function FastFoodPage() {
  return (
    <div className="fast-food">
      <div className="container">
        <img className="banner" src={banner} alt="" />
        <Titles title="الوجبات السريعة" />
        <div className="wrapper">
          <section className="sections-menu">
            {FastFood.map((item) => (
              <ol key={item.id}>
                <li>
                  <p>
                    <span>{item.id} / </span>
                    {item.name}
                  </p>
                  <hr />
                  <b>{item.price}</b>
                </li>
              </ol>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default FastFoodPage;
