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
                  <svg
                    width="20"
                    height="20"
                    aria-label="VK"
                    role="img"
                    viewBox="0 0 512 512"
                  >
                    <rect width="512" height="512" rx="15%" fill="#5281b8" />
                    <path
                      fill="#fff"
                      d="M274 363c5-1 14-3 14-15 0 0-1-30 13-34s32 29 51 42c14 9 25 8 25 8l51-1s26-2 14-23c-1-2-9-15-39-42-31-30-26-25 11-76 23-31 33-50 30-57-4-7-20-6-20-6h-57c-6 0-9 1-12 6 0 0-9 25-21 45-25 43-35 45-40 42-9-5-7-24-7-37 0-45 7-61-13-65-13-2-59-4-73 3-7 4-11 11-8 12 3 0 12 1 17 7 8 13 9 75-2 81-15 11-53-62-62-86-2-6-5-7-12-9H79c-6 0-15 1-11 13 27 56 83 193 184 192z"
                    />
                  </svg>
                  <a href=" " className="menu-footer__link icon-vk">
                    Вконтакте
                  </a>
                  <svg
                    x="10px"
                    width="20"
                    height="20"
                    viewBox="0 0 461.001 461.001"
                  >
                    <g>
                      <path
                        fill="#F61C0D"
                        d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728   c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137   C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607   c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                      />
                    </g>
                  </svg>
                  <a href=" " className="menu-footer__link icon-youtube">
                    Youtube
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
