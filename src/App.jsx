import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Menu from "./Pages/MenuPage/MenuPage";
import ContactUs from "./Pages/ContactUsPage/ContactUsPage";
import Footer from "./Footer/Footer";
import FastFoodPage from "./Pages/FastFoodPage/FastFoodPage";
import JuicesPage from "./Pages/JuicesPage/JuicesPage";
import SweetsPage from "./Pages/SweetsPage/SweetsPage";
import PlaygroundAreaPage from "./Pages/PlaygroundAreaPage/PlaygroundAreaPage";
import MealPage from "./Pages/MealsPage/MealsPage";
import Submit from "./Pages/Submit/Submit";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FastFoodPage" element={<FastFoodPage />} />
          <Route path="/JuicesPage" element={<JuicesPage />} />
          <Route path="/PlaygroundAreaPage" element={<PlaygroundAreaPage />} />
          <Route path="/SweetsPage" element={<SweetsPage />} />
          <Route path="/MealPage" element={<MealPage />} />
          <Route path="/Submit" element={<Submit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
