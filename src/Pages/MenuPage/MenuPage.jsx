import "./menu.scss";
import Titles from "../../Components/Titles/Titles";
import Sandwiches from "../../Data/Sandwiches";
import Shawarmas from "../../Data/Shawarmas";
import Burgers from "../../Data/Burgers";
import Pizzas from "../../Data/Pizzas";
function Menu() {
  return (
    <div className="Menu">
      <div className="container">
        <Titles title="منيـــــو" />
        <section>
          <h2>سندويتشات</h2>
          {Sandwiches.map((item) => (
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
        <section>
          <h2>شاورما </h2>
          {Shawarmas.map((item) => (
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
        <section>
          <h2>برجر </h2>
          {Burgers.map((item) => (
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
        <section>
          <h2>بيتزا </h2>
          {Pizzas.map((item) => (
            <ol key={item.id}>
              <li>
                <p>
                  <span>{item.id} / </span>
                  {item.name}
                </p>
                <hr />
                <div className="b-wrapper">
                  <b>{item.price_s}</b>
                  <b>{item.price_m}</b>
                  <b>{item.price_b}</b>
                </div>
              </li>
            </ol>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Menu;
