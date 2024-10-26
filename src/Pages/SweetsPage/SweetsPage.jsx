import "./Sweets page.scss";
import Titles from "../../Components/Titles/Titles";
import banner from "../../assets/imgs/Sweets bannar.jpg";
import Sweets from "../../Data/Sweets";
function SweetsPage() {
  return (
    <div className="Sweet-page">
      <div className="container">
        <img className="banner" src={banner} alt="" />

        <Titles title="الـحـلـويـات" />
        <div className="wrapper">
          <section className="sections-menu">
            {Sweets.map((item) => (
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

export default SweetsPage;
