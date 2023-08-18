import React from "react";


const Header = () => {
  return (
    <header className="header__container">
      <div className="header__logo">
        <img className="logo" src="/images/Ellipse 26.png" alt="Логотип NFT" />
        <h1 className="header__name">NFT</h1>
      </div>
      <nav className="header__nav">
        <a className="header__link1" href="#">
          Главная
        </a>
        <a className="header__link2" href="#">
          Что даст обучение
        </a>
        <button className="header__btn">Личный кабинет</button>
      </nav>
    </header>
  );
};

export default Header;
