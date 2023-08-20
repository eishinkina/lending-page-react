import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import cl from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={cl.home}>
        <img
          className={cl.header__elipse}
          src="./images/Ellipse 23.png"
          alt="Абстрактное изображение"
        />

        <Header />
        <Banner />
        <Benefits />
      </div>
    </div>
  );
};

export default Home;
