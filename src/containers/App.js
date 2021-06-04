import React from "react";
import Header from "../components/Header";
import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categorias";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";
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
  </div>
);

export default App;
