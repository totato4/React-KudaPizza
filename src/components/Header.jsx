import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Cart } from "./index";
import { useSelector } from "react-redux";
import { divide } from "lodash";

const Header = () => {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setScroll(true);
    } else if (window.scrollY < 60) {
      setScroll(false);
    }
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const accPopupRef1 = React.useRef(null);
  React.useEffect(() => {
    const handleOutsideClick = (e) => {
      // const path = e.composedPath && e.composedPath();
      // if (!path.includes(accPopupRef1.current)) {
      //   setVisiblePopup(false);
      // }
    };
    // ts-ignore
    document.body.addEventListener("click", handleOutsideClick());

    return () => {
      document.body.removeEventListener("click", handleOutsideClick());
    };
  }, []);

  const onSelect = () => {
    setVisiblePopup(false);
  };

  // реакт роутер скрытие кнопки корзины на странице корзины
  const { pathname } = useLocation();

  return (
    <div className="header">
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
              <div ref={accPopupRef1} className="header-top__right__acc-button">
                <button
                  onClick={toggleVisiblePopup}
                  className="header-top__right__login"
                >
                  <div className="login__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.99879 0C7.35682 0 5.20703 2.14979 5.20703 4.79176C5.20703 7.43372 7.35681 9.58333 9.99879 9.58333C12.6408 9.58333 14.7905 7.43372 14.7905 4.79176C14.7905 2.14979 12.6408 0 9.99879 0ZM6.27428 4.79176C6.27428 2.73768 7.94491 1.06724 9.99879 1.06724C12.0527 1.06724 13.7233 2.73768 13.7233 4.79176C13.7233 6.84566 12.0527 8.51609 9.99879 8.51609C7.94492 8.51609 6.27428 6.84566 6.27428 4.79176Z"
                        fill="#FF7010"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.9632 11.6665C3.59407 11.6665 1.66602 13.6453 1.66602 16.0768V19.4881C1.66602 19.7705 1.88944 19.9998 2.16459 19.9998H17.8341C18.1093 19.9998 18.3327 19.7705 18.3327 19.4881V16.0768C18.3327 13.6453 16.4046 11.6665 14.0355 11.6665H5.9632ZM2.66317 16.0768C2.66317 14.2092 4.14351 12.6899 5.9632 12.6899H14.0355C15.8552 12.6899 17.3355 14.2092 17.3355 16.0768V18.9764H2.66317V16.0768Z"
                        fill="#FF7010"
                      />
                    </svg>
                  </div>
                  <div className="login__text">Войти в аккаунт</div>
                </button>
                {visiblePopup && (
                  <div className="acc-popup__wrapper">
                    <div className="acc-popup">
                      <button
                        onClick={onSelect}
                        className="acc-popup__button_yellow"
                      >
                        100 бонусов
                      </button>
                      <div className="line-gray"></div>
                      <button onClick={onSelect} className="acc-popup__button">
                        История заказов
                      </button>
                      <button onClick={onSelect} className="acc-popup__button">
                        Настройки
                      </button>
                      <div className="line-gray"></div>
                      <button
                        onClick={onSelect}
                        className="acc-popup__button_gray"
                      >
                        Выход из аккаунта
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="header__header-middle">
            <img src="img/header/line.png" alt="line" className="img-line" />
          </div>

          <div
            className={
              scroll ? "header__header-bottom_fixed" : "header__header-bottom"
            }
          >
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
              <div
                className={
                  scroll
                    ? "navigation-menu_body_scrolling"
                    : "navigation-menu_body"
                }
              >
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
                        alt=""
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

            {pathname !== "/cart" && (
              <Link to="/cart">
                <Cart />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
