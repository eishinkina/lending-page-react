import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";

const App = () => {
  return (
    <div className="page">
      <img className="header__elipse" src="/images/Ellipse 23.png" alt="Абстрактное изображение" />
      <Header />
      <Banner />
    </div>
  );
};

export default App;
