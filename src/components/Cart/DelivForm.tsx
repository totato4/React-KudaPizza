import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../RTK/cart/selectors";

function DelivForm() {
  const { totalPrice } = useSelector(cartSelector);

  return (
    <div className="deliv-form__wrapper">
      <div className="deliv-form__container _form__container">
        <div className="deliv-form__header-wrapper">
          <div className="deliv-form__title _form__label">Доставка</div>
          <div className="deliv-form__buttons">
            <button className="delivery-pickup__button">Доставка</button>
            <button className="delivery-pickup__button">Самовывоз</button>
          </div>
        </div>
        <div className="deliv-form__input-wrapper deliv-form__input-wrapper_street">
          <div className="deliv-form__input-name  _form-input-title">Улица</div>
          <input
            type="text"
            maxLength={120}
            className="deliv-form__street-input _form-input-text"
            placeholder="Пушкина"
          />
        </div>

        <div className="deliv-form__input-wrapper">
          <div className="deliv-form__input">
            <div className="deliv-form__input-name _form-input-title">Дом</div>
            <input
              type="text"
              maxLength={19}
              className="deliv-form__address-input _form-input-text"
              placeholder="1а"
            />
          </div>

          <div className="deliv-form__input">
            <div className="deliv-form__input-name _form-input-title">
              Подъезд
            </div>
            <input
              type="text"
              maxLength={19}
              className="deliv-form__address-input _form-input-text"
              placeholder="1"
            />
          </div>

          <div className="deliv-form__input">
            <div className="deliv-form__input-name _form-input-title">Этаж</div>
            <input
              type="text"
              maxLength={19}
              className="deliv-form__address-input _form-input-text"
              placeholder="2"
            />
          </div>

          <div className="deliv-form__input">
            <div className="deliv-form__input-name _form-input-title">
              Квартира
            </div>
            <input
              type="text"
              maxLength={19}
              className="deliv-form__address-input _form-input-text"
              placeholder="3"
            />
          </div>

          <div className="deliv-form__input">
            <div className="deliv-form__input-name _form-input-title">
              Домофон
            </div>
            <input
              type="text"
              maxLength={19}
              className="deliv-form__address-input _form-input-text"
              placeholder="0000"
            />
          </div>
        </div>
        <div className="deliv-form__checkbox-wrapper">
          <div className="deliv-form__checkbox-title_time">
            Когда выполнить заказ?
          </div>
          <div className="deliv-form__radio-container">
            <div className="deliv-form__radio">
              <input
                type="radio"
                id="radio_time_1"
                className="deliv-form__radio-input"
                name="radio_time"
              />
              <label htmlFor="radio_time_1" className="deliv-form__radio-label">
                Как можно скорее
              </label>
            </div>
            <div className="deliv-form__radio">
              <input
                type="radio"
                id="radio_time_2"
                className="deliv-form__radio-input"
                name="radio_time"
              />
              <label htmlFor="radio_time_2" className="deliv-form__radio-label">
                По времени
              </label>
            </div>
          </div>
        </div>
        <div className="deliv-form__line"></div>
        <div className="deliv-form__checkbox-wrapper">
          <div className="deliv-form__radio-container">
            <div className="deliv-form__radio">
              <input
                type="radio"
                id="radio_pay_1"
                className="deliv-form__radio-input"
                name="radio_pay"
              />
              <label htmlFor="radio_pay_1" className="deliv-form__radio-label">
                Наличными
              </label>
            </div>
            <div className="deliv-form__radio">
              <input
                type="radio"
                id="radio-pay_2"
                className="deliv-form__radio-input"
                name="radio_pay"
              />
              <label htmlFor="radio-pay_2" className="deliv-form__radio-label">
                Картой
              </label>
            </div>
            <div className="deliv-form__radio">
              <input
                type="radio"
                id="radio_pay_3"
                className="deliv-form__radio-input"
                name="radio_pay"
              />
              <label htmlFor="radio_pay_3" className="deliv-form__radio-label">
                Apple Pay
              </label>
            </div>
          </div>
        </div>
        <div className="deliv-form__line"></div>
        <div className="deliv-form__checkbox-wrapper">
          <div className="deliv-form__checkbox-title _form__label">Сдача</div>
          <div className="deliv-form__radio-container">
            <div className="deliv-form__radio">
              <input
                type="radio"
                id="radio-change_1"
                className="deliv-form__radio-input"
                name="radio-change"
              />
              <label
                htmlFor="radio-change_1"
                className="deliv-form__radio-label"
              >
                Без сдачи
              </label>
            </div>
            <div className="deliv-form__radio">
              <input
                type="radio"
                id="radio-change_2"
                className="deliv-form__radio-input"
                name="radio-change"
              />
              <label
                htmlFor="radio-change_2"
                className="deliv-form__radio-label"
              >
                Сдача с
              </label>
              <input
                type="text"
                maxLength={19}
                className="deliv-form__change-input __form-input-text"
                placeholder="0                              ₽"
                name="radio-change"
              />
            </div>
          </div>
        </div>
        <div className="deliv-form__line"></div>
        <div className="deliv-form__comment-wrapper">
          <div className="deliv-form__comment-title _form__label">
            Комментарий
          </div>
          <p>
            <textarea
              className="deliv-form__comment-input __form-input-text"
              placeholder="Есть уточнения?"
            ></textarea>
          </p>
        </div>
        <div className="deliv-form__line"></div>
        <div className="deliv-form__checkout-wrapper">
          <div className="deliv-form__checkout-total-cost">
            Итого: {totalPrice} ₽
          </div>
          <button className="deliv-form__checkout-button">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}

export default DelivForm;
