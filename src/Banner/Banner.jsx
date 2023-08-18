import React from "react";

const Banner = () => {
  return (
    <main className="main__container">
      <section className="main">
        <article className="main__content">
          <img
            className="image__el"
            src="/images/Ellipse 25.png"
            alt="Абстрактное изображение"
          />
          <h1 className="main__title">
            Не упусти
            <br /> возможность войти в <b>прибыльную нишу</b>
          </h1>
          <p className="main__text">
            Получи все нужные навыки для заработка на NFT всего за 28 дней!
          </p>
          <button className="main__btn">Начать зарабатывать на NFT</button>
          <img
            className="image__light2"
            src="/images/Lightning 2.png"
            alt="Иконка молнии"
          />
        </article>
        <div className="main__images">
          <img
            className="image__elipse"
            src="/images/Ellipse 24.png"
            alt="Абстрактное изображение"
          />
          <img
            className="image__man"
            src="/images/business-3d-businessman-in-blue-suit-meditating 1.png"
            alt="Медитирующий бизнесмен"
          />
          <img className="image__piggy" src="/images/piggy.png" alt="Копилка" />
          <img className="image__money" src="/images/money.png" alt="Деньги" />
          <img
            className="image__smyle"
            src="/images/image 41.png"
            alt="Смайлик"
          />
          <img
            className="image__light1"
            src="/images/Lightning 1.png"
            alt="Иконка молнии"
          />
        </div>
      </section>
    </main>
  );
};

export default Banner;
