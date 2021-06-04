import React from "react";
import Header from "../components/Header";
import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categorias";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";
import Footer from "../components/Footer";
const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories>
      <Carrousel>
        <CarrouselItem />
        <CarrouselItem />
        <CarrouselItem />
      </Carrousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
