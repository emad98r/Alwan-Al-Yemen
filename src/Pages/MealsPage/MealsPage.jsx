import "./meal page.scss";
import Titles from "../../Components/Titles/Titles";
import Meals from "../../Data/Meals";
import banner from "../../assets/imgs/meals banner.jpg";

function MealsPage() {
  return (
    <div className="Meals-page">
      <div className="container">
        <img className="banner" src={banner} alt="" />

        <Titles title="الـوجـبـات" />
        <div className="wrapper">
          <section className="sections-menu">
            {Meals.map((item) => (
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

export default MealsPage;
