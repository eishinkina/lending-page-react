import React, { useState } from "react";
import MyModal from "../Modal/MyModal";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleScroll = (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки

    const targetElement = document.querySelector(
      event.target.getAttribute("href")
    );

    if (targetElement) {
      const topOffset = targetElement.offsetTop; // Определение верхней позиции элемента относительно верхнего края страницы
      window.scrollTo({ top: topOffset, behavior: "smooth" }); // Скролл к элементу с плавной анимацией
    }
  };

  return (
    <>
      <MyModal visible={modalVisible} setVisible={setModalVisible} />
      <header className="header__container">
        <div className="header__logo">
          <img
            className="logo"
            src="/images/Ellipse 26.png"
            alt="Логотип NFT"
          />
          <h1 className="header__name">NFT</h1>
        </div>
        <nav className="header__nav">
          <a className="header__link1" href="#Benefits">
            Главная
          </a>
          <a className="header__link2" href="#Benefits" onClick={handleScroll}>
            Что даст обучение
          </a>
          <button onClick={() => setModalVisible(true)} className="header__btn">
            Личный кабинет
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
