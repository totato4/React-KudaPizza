import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "./index";

function HeaderCart() {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__header-top">
            <div className="header-top__left">
              <div className="header-top__left__location">
                <div className="header-top__left__location-icon">
                  <img
                    src="img/header/location-icon.png"
                    alt="location-icon"
                    className="location-icon"
                  />
                </div>
                <div className="location__text">Москва</div>
                <div className="location__pop-up-icon">
                  <img
                    src="img/header/pop-up-icon.png"
                    alt="pop-up-icon"
                    className="pop-up-icon"
                  />
                </div>
              </div>
              <div className="header-top__left__check-location">
                Проверить адресс
              </div>
              <div className="header-top__left__time-delive">
                <div className="time-delive__text">Среднее время доставки:</div>
                <div className="time-delive__timer">00:24:19</div>
              </div>
            </div>
            <div className="header-top__right">
              <div className="header-top__right__work-time">
                Время работы: с 11:00 до 23:00
              </div>
              <div className="header-top__right__login">
                <div className="login__icon">
                  <img
                    src="img/header/login-icon.png"
                    alt="login-icon"
                    className="lign__icon-img"
                  />
                </div>
                <div className="login__text">Войти в аккаунт</div>
              </div>
            </div>
          </div>

          <div className="header__header-middle">
            <img src="img/header/line.png" alt="line" className="img-line" />
          </div>
          <div className="header__header-bottom header__header-bottom_cart">
            <div className="header__bottom-left">
              <div className="header-bottom__logo">
                <Link className="header-bottom__link" to="/">
                  <div className="logo">
                    <div className="logo__logo-icon">
                      <img
                        src="img/header/logo-icon.png"
                        alt="logo-icon"
                        className="logo-icon"
                      />
                    </div>
                    <div className="logo__text">Куда пицца</div>
                  </div>
                </Link>
              </div>
              <div className="navigation-menu_body_scrolling">
                <nav className="navigation-menu__nav">
                  <ul className="navigation-menu__ul">
                    <li className="navigation-menu__item">Акции</li>
                    <li className="navigation-menu__item">Пицца</li>
                    <li className="navigation-menu__item">Суши</li>
                    <li className="navigation-menu__item">Напитки</li>
                    <li className="navigation-menu__item">Закуски</li>
                    <li className="navigation-menu__item">Комбо</li>
                    <li className="navigation-menu__item">Десерты</li>
                    <li className="navigation-menu__item">Соусы</li>
                    <li className="navigation-menu__item">
                      Другое
                      <img
                        className="navigation-menu__img1"
                        src="img/home/menu/arrow.png"
                      />
                      <ul className="navigation-menu__drop-down">
                        <img
                          src="img/home/menu/union.png"
                          alt=""
                          className="navigation-menu__img2"
                        />
                        <ul className="navigation-menu__drop-down-list">
                          <li className="navigation-menu__subitem">Акции</li>
                          <li className="navigation-menu__subitem">
                            О компании
                          </li>
                          <li className="navigation-menu__subitem">
                            Пользовательское соглашение
                          </li>
                          <li className="navigation-menu__subitem">
                            Условия гарантии
                          </li>
                          <li className="navigation-menu__subitem">Ресторан</li>
                          <li className="navigation-menu__subitem">Контакты</li>
                          <li className="navigation-menu__subitem">
                            Поддержка
                          </li>
                          <li className="navigation-menu__subitem">
                            Отследить заказ
                          </li>
                        </ul>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <Link to="/Cart" className="header-cart">
              <Cart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderCart;
