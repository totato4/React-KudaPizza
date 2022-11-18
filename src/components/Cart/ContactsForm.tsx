import React from "react";

function ContactsForm() {
  return (
    <div className="contacts-form__wrapper">
      <div className="contacts-form__container _form__container">
        <div className="contacts-form__label _form__label">О вас</div>
        <div className="contacts-form__input-wrapper">
          <div className="contacts-form__input-name  _form-input-title">
            Имя*
          </div>
          <input
            type="text"
            className="contacts-form__input _form-input-text"
            placeholder="Алексей"
          />
        </div>
        <div className="contacts-form__input-wrapper">
          <div className="contacts-form__input-name _form-input-title">
            Номер телефора*
          </div>
          <input
            type="tel"
            className="contacts-form__input _form-input-text"
            placeholder="+7"
          />
        </div>
        <div className="contacts-form__input-wrapper">
          <div className="contacts-form__input-name _form-input-title">
            Почта
          </div>
          <input
            type="email"
            className="contacts-form__input _form-input-text"
            placeholder="mail@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactsForm;
