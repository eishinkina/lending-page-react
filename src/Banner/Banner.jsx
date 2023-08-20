import React from "react";
import { useState } from "react";
import MyModal from "../Modal/MyModal";
import cl from "./Banner.module.scss";

const Banner = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <MyModal visible={modalVisible} setVisible={setModalVisible} />
      <main className={cl.main__container}>
        <section className={cl.main}>
          <article className={cl.main__content}>
            <img
              className={cl.image__el}
              src="/images/Ellipse 25.png"
              alt="Абстрактное изображение"
            />
            <h1 className={cl.main__title}>
              Не упусти
              <br /> возможность войти в <b>прибыльную нишу</b>
            </h1>
            <div className={cl.man__banner}>
              <img src="/images/MAN 1.png" alt="" />
            </div>
            <p className={cl.main__text}>
              Получи все нужные <br /> навыки для заработка на NFT всего за 28 дней!
            </p>
            <button
              onClick={() => setModalVisible(true)}
              className={cl.main__btn}
            >
              Начать зарабатывать на NFT
            </button>
            <img
              className={cl.image__light2}
              src="/images/Lightning 2.png"
              alt="Иконка молнии"
            />
          </article>

          <div className={cl.main__images}>
            <img
              className={cl.image__elipse}
              src="/images/Ellipse 24.png"
              alt="Абстрактное изображение"
            />
            <img
              className={cl.image__man}
              src="/images/business-3d-businessman-in-blue-suit-meditating 1.png"
              alt="Медитирующий бизнесмен"
            />
            <img
              className={cl.image__piggy}
              src="/images/piggy.png"
              alt="Копилка"
            />
            <img
              className={cl.image__money}
              src="/images/money.png"
              alt="Деньги"
            />
            <img
              className={cl.image__smyle}
              src="/images/image 41.png"
              alt="Смайлик"
            />
            <img
              className={cl.image__light1}
              src="/images/Lightning 1.png"
              alt="Иконка молнии"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Banner;
