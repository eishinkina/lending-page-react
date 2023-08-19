import React from "react";

const Benefits = () => {
  return (
    <>
      <section className="benefits">
        <div className="benefits__container">
          <div className="benefits__images">
            <img
              src="/images/Ellipse 27.png"
              className="benefits__image--27"
              alt="Ellipse 27"
            />
            <img
              src="/images/Ellipse 223.png"
              className="benefits__image--223"
              alt="Ellipse 223"
            />
            <img
              src="/images/Ellipse 126.png"
              className="benefits__image--126"
              alt="Ellipse 126"
            />
            <img
              src="/images/Ellipse 266.png"
              className="benefits__image--266"
              alt="Ellipse 266"
            />
            <img
              src="/images/Ellipse 125.png"
              className="benefits__image--125"
              alt="Ellipse 125"
            />
          </div>
          <div className="header__wrapper">
            <h1 className="benefits__title">Что даст тебе обучение?</h1>
          </div>
          <div className="benefits__cards">
            <div className="cards__wrapper">
              <div className="benefits__shadows"></div>
              <div className="benefits-card">
                <div className="card__img-wrapper">
                  <img
                    className="card__img"
                    src="/images/Group 138.png"
                    alt="image"
                  />
                </div>
                <p className="benefits__text1">
                  Откроешь свой первый <br /> криптокошелек и научишься <br /> с
                  ним работать
                </p>
              </div>
            </div>
            <div className="cards__wrapper">
              <div className="benefits__shadows"></div>
              <div className="benefits-card">
                <img
                  className="card__img"
                  src="/images/Group 3290.png"
                  alt=""
                />
                <p className="benefits__text2">
                  Поймёшь, как выбирать
                  <br /> правильные дропы
                </p>
              </div>
            </div>
            <div className="cards__wrapper">
              <div className="benefits__shadows"></div>
              <div className="benefits-card">
                <img className="card__img" src="/images/Group 140.png" alt="" />
                <p className="benefits__text3">
                  Построишь план <br /> по быстрому приумножению заработанных
                  средств
                </p>
              </div>
            </div>
            <div className="cards__wrapper">
              <div className="benefits-card">
                <img className="card__img" src="/images/Group 142.png" alt="" />
                <p className="benefits__text4">
                  Узнаешь кто такие холдеры и флипперы
                </p>
              </div>
              <div className="benefits__shadows"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
