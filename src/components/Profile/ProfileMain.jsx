import React from "react";

function ProfileMain() {
  const [tab, setTab] = React.useState(true);
  console.log(tab);

  const toggleButton1 = (e) => {
    setTab(e);
  };

  const toggleButton2 = (e) => {
    setTab(e);
  };

  let width = window.innerWidth;
  console.log(width);

  return (
    <>
      <div className="profile__wrapper">
        <div className="profile__container">
          <div className="profile-navigation">
            <div className="profile-navigation__title">Мой аккаунт</div>
            <div className="profile-navigation__buttons">
              <button
                onClick={() => toggleButton1(true)}
                className="profile-navigation__button"
              >
                История заказов
              </button>
              <button
                onClick={() => toggleButton2(false)}
                className="profile-navigation__button"
              >
                Настройки
              </button>
            </div>
          </div>
          {tab ? (
            <div className="profile-order__wrapper">
              <div className="profile-order">
                <div className="profile-order__info-wrapper">
                  <div className="profile-order__line"></div>
                  <div className="profile-order__info _order-data">
                    <div className="profile-order__title ">Заказ</div>
                    <div className="profile-order__value ">
                      №130312 <p className="profile-order__data">22.06.21</p>
                    </div>
                  </div>
                  <div className="profile-order__info _order-price">
                    <div className="profile-order__title ">Сумма заказа</div>
                    <div className="profile-order__value ">399 ₽</div>
                  </div>
                  <div className="profile-order__info _order-status">
                    <div className="profile-order__title ">Статус</div>
                    <div className="profile-order__value ">Обрабатывается</div>
                  </div>
                  <div className="profile-order__info _order-payment">
                    <div className="profile-order__title ">Оплачено</div>
                    <div className="profile-order__value ">Картой</div>
                  </div>
                  <button className="profile-order__popup-button">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.527021 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z"
                        fill="#FF7010"
                      />
                    </svg>
                  </button>
                </div>
                <div className="profile-line-gray"></div>
                <div className="profile-order__location-wrapper">
                  <div className="profile-order__location ">
                    ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
                  </div>
                  <div className="profile-order__orders">
                    <div className="profile-orders__orders-item">
                      <img
                        src="img/profile/profile-order/miniPizza.png"
                        alt=""
                        className="orders-item-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-order">
                <div className="profile-order__info-wrapper">
                  <div className="profile-order__line"></div>
                  <div className="profile-order__info _order-data">
                    <div className="profile-order__title ">Заказ</div>
                    <div className="profile-order__value ">
                      №130312 <p className="profile-order__data">22.06.21</p>
                    </div>
                  </div>
                  <div className="profile-order__info _order-price">
                    <div className="profile-order__title ">Сумма заказа</div>
                    <div className="profile-order__value ">1 252 ₽ ₽</div>
                  </div>
                  <div className="profile-order__info _order-status">
                    <div className="profile-order__title ">Статус</div>
                    <div className="profile-order__value ">
                      Едет к вам (в 15:13)
                    </div>
                  </div>
                  <div className="profile-order__info _order-payment">
                    <div className="profile-order__title ">Оплачено</div>
                    <div className="profile-order__value ">Наличкой</div>
                  </div>
                  <button className="profile-order__popup-button">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.527021 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z"
                        fill="#FF7010"
                      />
                    </svg>
                  </button>
                </div>
                <div className="profile-line-gray"></div>
                <div className="profile-order__location-wrapper">
                  <div className="profile-order__location ">
                    ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
                  </div>
                  <div className="profile-order__orders">
                    <div className="profile-orders__orders-item">
                      <img
                        src="img/profile/profile-order/miniPizza.png"
                        alt=""
                        className="orders-item-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="settings">
              <div className="settings__personal settings__column">
                <div className="settings__column__wrapper">
                  <div className="personal__wrapper-left">
                    <div className="personal__title settings__title">
                      Личные данные
                    </div>
                    <div className="personal__info">
                      <div className="personal__info-wrapper">
                        <div className="personal__label">Имя*</div>
                        <div className="personal__text">Вадим</div>
                      </div>
                      <div className="personal__info-wrapper">
                        <div className="personal__label">Номер телефона*</div>
                        <div className="personal__text">+7 (000) 000-00-00</div>
                      </div>
                      <div className="personal__info-wrapper">
                        <div className="personal__label">Почта</div>
                        <div className="personal__text">mail@gmail.com</div>
                      </div>
                      <div className="personal__info-wrapper">
                        <div className="personal__label">Дата рождения</div>
                        <div className="personal__text">13.02.1996</div>
                      </div>
                    </div>
                  </div>
                  <button className="settings-button">
                    <div className="settings__img-wrapper">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.95905 14.4571C1.76201 14.4571 1.56535 14.3821 1.41488 14.2316C1.11431 13.931 1.11431 13.4438 1.41488 13.1433L13.4428 1.11532C13.743 0.814752 14.2306 0.814752 14.5312 1.11532C14.8317 1.41588 14.8317 1.90309 14.5312 2.20366L2.50322 14.2316C2.35313 14.3817 2.15609 14.4571 1.95905 14.4571Z"
                          fill="#FF7010"
                        />
                        <path
                          d="M0.770459 19.9999C0.716966 19.9999 0.662702 19.9942 0.608439 19.9826C0.192807 19.8933 -0.0719665 19.4842 0.0173175 19.0686L1.20649 13.5257C1.29577 13.1101 1.70679 12.8461 2.12049 12.9346C2.53613 13.0239 2.8009 13.4329 2.71162 13.8486L1.52245 19.3915C1.44509 19.7529 1.12567 19.9999 0.770459 19.9999Z"
                          fill="#FF7010"
                        />
                        <path
                          d="M6.31452 18.811C6.11747 18.811 5.92082 18.7359 5.77034 18.5855C5.46978 18.2849 5.46978 17.7977 5.77034 17.4971L17.7983 5.46956C18.0985 5.169 18.5861 5.169 18.8866 5.46956C19.1872 5.77013 19.1872 6.25734 18.8866 6.5579L6.85907 18.5855C6.7086 18.7359 6.51156 18.811 6.31452 18.811Z"
                          fill="#FF7010"
                        />
                        <path
                          d="M0.76919 20.0001C0.413978 20.0001 0.094942 19.753 0.0172034 19.3916C-0.0716958 18.976 0.192693 18.5669 0.608325 18.4776L6.15125 17.2884C6.56726 17.2003 6.97635 17.4643 7.06525 17.8796C7.15415 18.2952 6.88976 18.7043 6.47413 18.7936L0.93121 19.9827C0.876947 19.9947 0.822683 20.0001 0.76919 20.0001Z"
                          fill="#FF7010"
                        />
                        <path
                          d="M16.1624 8.95993C15.9654 8.95993 15.7683 8.88488 15.6182 8.73441L11.2645 4.38066C10.9639 4.08009 10.9639 3.59288 11.2645 3.29232C11.5647 2.99175 12.0526 2.99175 12.3528 3.29232L16.7066 7.64607C17.0071 7.94663 17.0071 8.43384 16.7066 8.73441C16.5565 8.88488 16.3594 8.95993 16.1624 8.95993Z"
                          fill="#FF7010"
                        />
                        <path
                          d="M18.3429 6.78327C18.1458 6.78327 17.9488 6.70823 17.7983 6.55775C17.4977 6.25719 17.4977 5.76998 17.7983 5.46903C18.2266 5.0407 18.4625 4.46074 18.4625 3.83652C18.4625 3.2123 18.2266 2.63234 17.7983 2.20401C17.3696 1.77529 16.7896 1.53938 16.1654 1.53938C15.5412 1.53938 14.9612 1.77529 14.5329 2.20401C14.2327 2.50457 13.7455 2.50496 13.4442 2.20401C13.1436 1.90344 13.1436 1.41623 13.4442 1.11528C14.1631 0.396005 15.1294 0 16.1654 0C17.201 0 18.1678 0.396005 18.8866 1.11528C19.6059 1.83417 20.0019 2.80052 20.0019 3.83652C20.0019 4.87252 19.6059 5.83887 18.8866 6.55775C18.7369 6.70784 18.5399 6.78327 18.3429 6.78327Z"
                          fill="#FF7010"
                        />
                      </svg>
                    </div>
                    Изменить
                  </button>
                </div>
              </div>

              <div className="settings__password settings__column">
                <div className="settings__column__wrapper">
                  <div className="settings__title">Пароль</div>
                  <button className="settings-button">
                    <div className="settings__img-wrapper">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.95905 14.4571C1.76201 14.4571 1.56535 14.3821 1.41488 14.2316C1.11431 13.931 1.11431 13.4438 1.41488 13.1433L13.4428 1.11532C13.743 0.814752 14.2306 0.814752 14.5312 1.11532C14.8317 1.41588 14.8317 1.90309 14.5312 2.20366L2.50322 14.2316C2.35313 14.3817 2.15609 14.4571 1.95905 14.4571Z"
                          fill="#FF7010"
                        />
                        <path
                          d="M0.770459 19.9999C0.716966 19.9999 0.662702 19.9942 0.608439 19.9826C0.192807 19.8933 -0.0719665 19.4842 0.0173175 19.0686L1.20649 13.5257C1.29577 13.1101 1.70679 12.8461 2.12049 12.9346C2.53613 13.0239 2.8009 13.4329 2.71162 13.8486L1.52245 19.3915C1.44509 19.7529 1.12567 19.9999 0.770459 19.9999Z"
                          fill="#FF7010"
                        />
                        <path
                          d="M6.31452 18.811C6.11747 18.811 5.92082 18.7359 5.77034 18.5855C5.46978 18.2849 5.46978 17.7977 5.77034 17.4971L17.7983 5.46956C18.0985 5.169 18.5861 5.169 18.8866 5.46956C19.1872 5.77013 19.1872 6.25734 18.8866 6.5579L6.85907 18.5855C6.7086 18.7359 6.51156 18.811 6.31452 18.811Z"
                          fill="#FF7010"
                        />
                        <path
                          d="M0.76919 20.0001C0.413978 20.0001 0.094942 19.753 0.0172034 19.3916C-0.0716958 18.976 0.192693 18.5669 0.608325 18.4776L6.15125 17.2884C6.56726 17.2003 6.97635 17.4643 7.06525 17.8796C7.15415 18.2952 6.88976 18.7043 6.47413 18.7936L0.93121 19.9827C0.876947 19.9947 0.822683 20.0001 0.76919 20.0001Z"
                          fill="#FF7010"
                        />
                        <path
                          d="M16.1624 8.95993C15.9654 8.95993 15.7683 8.88488 15.6182 8.73441L11.2645 4.38066C10.9639 4.08009 10.9639 3.59288 11.2645 3.29232C11.5647 2.99175 12.0526 2.99175 12.3528 3.29232L16.7066 7.64607C17.0071 7.94663 17.0071 8.43384 16.7066 8.73441C16.5565 8.88488 16.3594 8.95993 16.1624 8.95993Z"
                          fill="#FF7010"
                        />
                        <path
                          d="M18.3429 6.78327C18.1458 6.78327 17.9488 6.70823 17.7983 6.55775C17.4977 6.25719 17.4977 5.76998 17.7983 5.46903C18.2266 5.0407 18.4625 4.46074 18.4625 3.83652C18.4625 3.2123 18.2266 2.63234 17.7983 2.20401C17.3696 1.77529 16.7896 1.53938 16.1654 1.53938C15.5412 1.53938 14.9612 1.77529 14.5329 2.20401C14.2327 2.50457 13.7455 2.50496 13.4442 2.20401C13.1436 1.90344 13.1436 1.41623 13.4442 1.11528C14.1631 0.396005 15.1294 0 16.1654 0C17.201 0 18.1678 0.396005 18.8866 1.11528C19.6059 1.83417 20.0019 2.80052 20.0019 3.83652C20.0019 4.87252 19.6059 5.83887 18.8866 6.55775C18.7369 6.70784 18.5399 6.78327 18.3429 6.78327Z"
                          fill="#FF7010"
                        />
                      </svg>
                    </div>
                    Изменить
                  </button>
                </div>
              </div>
              <div className="settings__subscriptions settings__column">
                <div className="settings__column__wrapper settings__column-wrapper_subscribe">
                  <div className="settings__title">Подписки</div>
                  <div className="deliv-form__radio settings__checkbox">
                    <input
                      type="checkbox"
                      id="radio_time_1"
                      className="deliv-form__radio-input"
                      name="radio_time"
                    />
                    <label
                      htmlFor="radio_time_1"
                      className="deliv-form__radio-label"
                    >
                      Получать предложения и акции
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {tab ? (
        <div className="paginator__wrapper">
          <div className="paginator__container _container">
            <button className="paginator__button paginator__button_orange">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8483 17.7272C12.6468 17.7272 12.4451 17.6497 12.2912 17.4948L4.41254 9.56093C4.10468 9.25091 4.10468 8.74889 4.41254 8.43908L12.2912 0.505217C12.5991 0.195201 13.0976 0.195201 13.4053 0.505217C13.713 0.815232 13.7131 1.31725 13.4053 1.62706L6.08361 9L13.4053 16.3729C13.7131 16.683 13.7131 17.185 13.4053 17.4948C13.2515 17.6497 13.0498 17.7272 12.8483 17.7272Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="paginator__button">1</button>
            <button className="paginator__button">2</button>
            <button className="paginator__button">105</button>
            <button className="paginator__button paginator__button_orange">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.15174 17.7272C5.35323 17.7272 5.55493 17.6497 5.70876 17.4948L13.5875 9.56093C13.8953 9.25091 13.8953 8.74889 13.5875 8.43908L5.70876 0.505217C5.4009 0.195201 4.90237 0.195201 4.59471 0.505217C4.28705 0.815232 4.28685 1.31725 4.59471 1.62706L11.9164 9L4.59471 16.3729C4.28685 16.683 4.28685 17.185 4.59471 17.4948C4.74854 17.6497 4.95024 17.7272 5.15174 17.7272Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProfileMain;
