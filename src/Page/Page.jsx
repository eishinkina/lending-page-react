import React, { useState } from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";

const Page = () => {
  return (
    <div>
      <div className="page">
        <img
          className="header__elipse"
          src="/images/Ellipse 23.png"
          alt="Абстрактное изображение"
        />

        <Header />
        <Banner />
        <Benefits />
      </div>
    </div>
  );
};

export default Page;
