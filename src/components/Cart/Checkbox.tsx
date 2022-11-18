import React from "react";

const Checkbox: React.FC = () => {
  return (
    <div className="deliv-form__radio-container">
      <div className="deliv-form__radio">
        <input
          type="radio"
          id="radio_1"
          className="deliv-form__radio-input"
          name="radio"
        />
        <label htmlFor="radio_1" className="deliv-form__radio-label">
          Как можно скорее
        </label>
      </div>
      <div className="deliv-form__radio">
        <input
          type="radio"
          id="radio_2"
          className="deliv-form__radio-input"
          name="radio"
        />
        <label htmlFor="radio_2" className="deliv-form__radio-label">
          к
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
