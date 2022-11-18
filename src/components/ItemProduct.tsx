import React from "react";

const ItemProduct = () => {
  return (
    <div className="item-body">
      <div className="item-img">
        <img
          src="img/home/product/label/label.png"
          alt="alt"
          className="item__label item__label_active"
        />
        <img
          src="img/home/product/pizzas/1.png"
          alt="alt"
          className="item__img"
        />
      </div>
      <div className="item-text-wrapper">
        <div className="item-text">
          <div className="item__title">Чикен Сладкий Чили</div>
          <div className="item__subtitle">
            Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
          </div>
        </div>
        <div className="item-bottom">
          <div className="item__button">Выбрать</div>
          <div className="item__price">от 399 ₽</div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
