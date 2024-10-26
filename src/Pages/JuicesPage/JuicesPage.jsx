import "./Juices page.scss";
import Titles from "../../Components/Titles/Titles";
import Juices from "../../Data/Juices";
import banner from "../../assets/imgs/Juices banner.jpg";
function JuicesPage() {
  return (
    <div className="Juice-page">
      <div className="container">
        <img className="banner" src={banner} alt="" />

        <Titles title="العصائر" />
        <div className="wrapper">
          <section className="sections-menu">
            {Juices.map((item) => (
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

export default JuicesPage;
