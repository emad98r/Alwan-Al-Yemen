import Titles from "../../Components/Titles/Titles";
import "./Contact-us-page.scss";
import Buttons from "../../Components/Buttons/Buttons";
import contactImg from "../../assets/imgs/contact us page.png";
function ContactUsPage() {
  return (
    <>
      <div className="contact-wrapper">
        <div className="container">
          <img src={contactImg} alt="" />
          <Titles title="اتصل بنا" />

          <div className="wrapper">
            <form>
              <div className="name">
                <input type="text" name="name" id="name" placeholder="الاسم" />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="اللقب"
                />
              </div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="الموضوع"
              />
              <input type="text" name="phone" id="phone" placeholder="تلفون" />
              <textarea
                name="message"
                id="message"
                placeholder="الرسالة"
                rows={7}
              ></textarea>
              <Buttons buttonText="ارســــل" link="/Submit" />
            </form>

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d932.9367487655253!2d44.23559736345539!3d15.303451380112067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1729925363003!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
