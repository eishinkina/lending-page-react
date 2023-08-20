import React, { useState } from "react";
import MyModal from "../Modal/MyModal";
import cl from "./Header.module.scss";
import ModalNav from "../ModalNav/ModalNav";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false)

  const handleScroll = (event) => {
    event.preventDefault();

    const targetElement = document.querySelector(
      event.target.getAttribute("href")
    );

    if (targetElement) {
      const topOffset = targetElement.offsetTop;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <>
      <MyModal visible={modalVisible} setVisible={setModalVisible} />
      <header className={cl.header__container}>
        <div className={cl.header__logo}>
          <img
            className={cl.logo}
            src="/images/Ellipse 26.png"
            alt="Логотип NFT"
          />
          <h1 className={cl.header__name}>NFT</h1>
        </div>
        <nav className={cl.header__nav}>
          <a className={cl.header__link1} href="#">
            Главная
          </a>
          <a
            className={cl.header__link2}
            href="#Benefits"
            onClick={handleScroll}
          >
            Что даст обучение
          </a>
          <button
            onClick={() => setModalVisible(true)}
            className={cl.header__btn}
          >
            Личный кабинет
          </button>
        </nav>
        <div onClick={() => setNavVisible(true)} className={cl.header__menuButton}><img src="/images/Frame 275.png" alt="" /></div>
        <ModalNav visible={navVisible} setVisible={setNavVisible}/>
      </header>
    </>
  );
};

export default Header;
