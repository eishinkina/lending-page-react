import React, { useState } from "react";
import cl from "./Mymodal.module.scss";

const MyModal = ({ visible, setVisible }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!isValidEmail(newEmail)) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Некорректный email");
      return;
    }
    setEmail("");
    setEmailError("");
    setVisible(false);

    alert("Данные сохранены!");
  };

  return (
    <div className={rootClasses.join(" ")}>
      <div className={cl.myModalContent}>
        <div className={cl.myModalText}>
          <h1 className={cl.myModal__title}>Начни прямо сейчас!</h1>
          <p className={cl.myModal__text}>
            Получи все нужные навыки для заработка
            <br /> на NFT всего за 28 дней!
          </p>
        </div>
        <div onClick={() => setVisible(false)} className={cl.myModal__outline}>
          <img src="./images/Outline.png" alt="Закрыть" />
        </div>
        <form className={cl.formsStyle} onSubmit={handleSubmit}>
          <input
            className={cl.form__input}
            type="text"
            placeholder="Ваш email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className={cl.emailError}>{emailError}</p>}
          <button type="submit" className={cl.form__btn}>
            Оплатить
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyModal;