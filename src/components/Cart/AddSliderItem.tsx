import React from "react";

type Iname = {
  name?: string;
};

const AddSliderItem: React.FC<Iname> = ({ name }) => {
  console.log(name, "addSlider ITEM");
  return (
    <div className="add-slider__item-wrapper">
      <div className="add-slider__img-wrapper">
        <img
          src="img/cart/addSlider/slider-img.png"
          alt="abc"
          className="add-slider-img"
        />
      </div>
      <div className="add-slider__title">{name}</div>
      <div className="add-slider__subtitle">Порция 95 г</div>
      <button className="add-slider__button">179 ₽</button>
    </div>
  );
};

export default AddSliderItem;
