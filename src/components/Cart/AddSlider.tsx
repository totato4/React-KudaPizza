import React from "react";
import { AddSliderItem } from "./index";

const AddSlider: React.FC = ({ label }: any) => {
  return (
    <div className="add-slider__wrapper">
      <div className="add-slider__label">{label}</div>
      <div className="add-slider__container">
        <button className="add-slider__spin-button">
          <img
            src="img/cart/AddSlider/button-left.png"
            alt="left"
            className="add-slider__button__img"
          />
        </button>
        <AddSliderItem name="name" />
        <AddSliderItem />
        <AddSliderItem />
        <AddSliderItem />
        <button className="add-slider__spin-button">
          <img
            src="img/cart/AddSlider/button-right.png"
            alt="right"
            className="add-slider__button__img"
          />
        </button>
      </div>
    </div>
  );
};

export default AddSlider;
