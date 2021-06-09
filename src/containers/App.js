import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categorias";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";
import Footer from "../components/Footer";
const App = () => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch("http://localhost:3000/initialState")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  console.log(videos);
  console.log(videos.trends);
  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carrousel>
            <CarrouselItem />
            <CarrouselItem />
          </Carrousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carrousel>
          {videos.trends?.map((item) => (
            <CarrouselItem key={item.id} {...item} />
          ))}
        </Carrousel>
      </Categories>

      <Categories title="Originales">
        <Carrousel>
          {videos.originals?.map((item) => (
            <CarrouselItem key={item.id} {...item} />
          ))}
        </Carrousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
