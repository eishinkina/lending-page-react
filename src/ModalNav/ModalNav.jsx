import React from "react";
import cl from "./Modalnav.module.scss";

const ModalNav = ({visible, setVisible}) => {
    const rootCl = [cl.modalNav];
    if(visible) {
        rootCl.push(cl.active)
    }

  return (
    <div className={rootCl.join(" ")}>
      <div className={cl.modalNavContent}>
        <div className={cl.headerNav}>
          <div className={cl.headerNavLogo}>
            <div className={cl.header__logo}>
              <img
                className={cl.logo}
                src="./images/Ellipse 26.png"
                alt="Логотип NFT"
              />
              <h1 className={cl.header__name}>NFT</h1>
            </div>
          </div>
          <div className={cl.header__close}>
            <img src="./images/Outline24.png" alt=""  onClick={() => setVisible(false)}  />
          </div>
        </div>
        <div className={cl.modalLink}>
          <a className={cl.navLink1} href="#">
            Главная
          </a>
          <a className={cl.navLink2} href="#">
            Что даст обучение
          </a>
          <button className={cl.navBtn}>Личный кабинет</button>
        </div>
      </div>
    </div>
  );
};

export default ModalNav;
