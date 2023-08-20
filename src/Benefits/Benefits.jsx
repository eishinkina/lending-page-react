import React from "react";
import cl from "./Benefits.module.scss"

const Benefits = () => {
  return (
    <>
      <section className={cl.benefits} id="Benefits">
        <div className={cl.benefits__container}>
          <div className={cl.benefits__images}>
            <img
              src="./images/Ellipse 27.png"
              className={cl.benefits__image27}
              alt="Ellipse 27"
            />
            <img
              src="./images/Ellipse 223.png"
              className={cl.benefits__image223}
              alt="Ellipse 223"
            />
            <img
              src="./images/Ellipse 126.png"
              className={cl.benefits__image126}
              alt="Ellipse 126"
            />
            <img
              src="./images/Ellipse 266.png"
              className={cl.benefits__image266}
              alt="Ellipse 266"
            />
            <img
              src="./images/Ellipse 125.png"
              className={cl.benefits__image125}
              alt="Ellipse 125"
            />
          </div>
          <div className={cl.header__wrapper}>
            <h1 className={cl.benefits__title}>Что даст тебе обучение?</h1>
          </div>
          <div className={cl.benefits__cards}>
            <div className={cl.cards__wrapper}>
              <div className={cl.benefits__shadows}></div>
              <div className={cl.benefits__card}>
                <div className="card__imgWrapper">
                  <img
                    className={cl.card__img}
                    src="./images/Group 138.png"
                    alt="image"
                  />
                </div>
                <p className={cl.benefits__text1}>
                  Откроешь свой первый <br /> криптокошелек и научишься <br /> с
                  ним работать
                </p>
              </div>
            </div>
            <div className={cl.cards__wrapper}>
              <div className={cl.benefits__shadows}></div>
              <div className={cl.benefits__card}>
                <img
                  className={cl.card__img}
                  src="./images/Group 3290.png"
                  alt=""
                />
                <p className={cl.benefits__text2}>
                  Поймёшь, как выбирать
                  <br /> правильные дропы
                </p>
              </div>
            </div>
            <div className={cl.cards__wrapper}>
              <div className={cl.benefits__shadows}></div>
              <div className={cl.benefits__card}>
                <img className={cl.card__img} src="./images/Group 140.png" alt="" />
                <p className={cl.benefits__text3}>
                  Построишь план <br /> по быстрому приумножению заработанных
                  средств
                </p>
              </div>
            </div>
            <div className={cl.cards__wrapper}>
              <div className={cl.benefits__card}>
                <img className={cl.card__img} src="./images/Group 142.png" alt="" />
                <p className={cl.benefits__text4}>
                  Узнаешь кто такие холдеры и флипперы
                </p>
              </div>
              <div className={cl.benefits__shadows}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
