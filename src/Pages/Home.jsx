import Restaurant_sections from "../Restaurant_sections/Restaurant_sections";
import Activities from "../Activities/Activities";
import ContactUs from "../ContactUs/ContactUs";
import Hero from "../Hero/Hero";
import ImagesHeader from "../ImagesHeader/ImagesHeader";

function Home() {
  return (
    <>
      <ImagesHeader />
      <Hero />
      <Restaurant_sections />
      <Activities />
      <ContactUs />
    </>
  );
}

export default Home;
