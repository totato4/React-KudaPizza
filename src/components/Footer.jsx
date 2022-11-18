import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer-logo">
          <div className="footer-logo__logo">
            <img
              src="img/header/logo-icon.png"
              alt="pizza"
              className="logo-icon-footer"
            />
            <img
              src="img/footer/pizza-logo.png"
              alt="Kuda pizza"
              className="logo-icon-text-footer"
            />
          </div>
          <div className="copyright">© Copyright 2021 — Куда Пицца</div>
        </div>
        <div className="footer__row">
          <div className="footer__column">
            <div className="footer__label">Куда пицца</div>
            <nav className="footer__menu menu-footer">
              <ul className="menu-footer__list">
                <li className="menu-footer__item">
                  <a href=" " className="menu-footer__link">
                    О компании
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href=" " className="menu-footer__link">
                    Пользовательское соглашение
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href=" " className="menu-footer__link">
                    Условия гарантии
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__column">
            <div className="footer__label">Помощь</div>
            <nav className="footer__menu menu-footer">
              <ul className="menu-footer__list">
                <li className="menu-footer__item">
                  <a href=" " className="menu-footer__link">
                    Ресторан
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href=" " className="menu-footer__link">
                    Контакты
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href=" " className="menu-footer__link">
                    Поддержка
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href=" " className="menu-footer__link">
                    Отследить заказ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__column">
            <div className="footer__label">Контакты</div>
            <nav className="footer__menu menu-footer">
              <ul className="menu-footer__list">
                <li className="menu-footer__item">
                  <img
                    src="img/header/phone.png"
                    alt=""
                    className="footer-contact"
                  />
                  <a href=" " className="menu-footer__link">
                    +7 (926) ***-**-**
                  </a>
                </li>
                <li className="menu-footer__item">
                  <img
                    src="img/header/location-icon.png"
                    alt=""
                    className="footer-contact"
                  />
                  <a href=" " className="menu-footer__link">
                    Москва, ул. Юных Ленинцев, д.99
                  </a>
                </li>
                <li className="menu-footer__item">
                  <img
                    src="img/header/facebook.png"
                    alt=""
                    className="footer-contact"
                  />
                  <a
                    href=" "
                    className="menu-footer__link menu-footer__link_double"
                  >
                    Facebook
                  </a>
                  <img
                    src="img/header/insta.png"
                    alt=""
                    className="footer-contact"
                  />
                  <a href=" " className="menu-footer__link">
                    Instagram
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
