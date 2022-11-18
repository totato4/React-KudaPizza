import React from "react";
import { Iitem } from "./../RTK/items/types";

const Pizza: React.FC<Iitem> = ({ id, name, price, filling, hit }) => {
  console.log(filling);
  return (
    <div className="item-body">
      <div className="item-img">
        <img
          src="img/home/product/label/label.png"
          alt="alt"
          className={
            hit === true ? "item__label item__label_active" : "item__label"
          }
        />
        <img
          src={`img/home/product/goods/pizza/${id}`}
          alt="alt"
          className="item__img"
        />
      </div>
      <div className="item-text-wrapper">
        <div className="item-text">
          <div className="item__title">{name}</div>
          <div className="item__subtitle">
            {filling ? filling.map((fil: any, i: number) => fil.name) : ""}
          </div>
        </div>
        <div className="item-bottom">
          <div className="item__button">Выбрать</div>
          <div className="item__price">от {price} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
