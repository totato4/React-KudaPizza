import clsx from "clsx";
import React from "react";
import { addItems, removeItem, minusItem } from "../../RTK/cart/slice";
import { useAppDispatch } from "../../RTK/store";
import { Iitem } from "../../RTK/items/types";

const Order: React.FC<Iitem> = ({ id, title, price, count, imageUrl }) => {
  const dispatch = useAppDispatch();
  const onClickPlus = () => {
    dispatch(
      addItems({
        id,
      } as Iitem)
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите убрать товар из корзины?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="order__wrapper">
      <div className="order-img__wrapper">
        <img src={imageUrl} className="order-img" />
      </div>
      <div className="order-text">
        <div className="order-text__title">{title}</div>
        <div className="order-text__subtitle">Традиционное тесто, 23 см</div>
      </div>
      <div className="order-button__wrapper">
        <button
          disabled={count === 1}
          onClick={onClickMinus}
          className={clsx(
            "order-button__minus",
            {
              "order-button__minus_disabled": count === 1,
            },
            { "order-button__minus_active": count > 1 }
          )}
        >
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4V4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4V4Z"
              fill="#FF7010"
            />
          </svg>
        </button>
        <div className="order-button__value">{count}</div>
        <button onClick={onClickPlus} className="order-button__plus">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4404_11673)">
              <path
                d="M8 4C8 3.58579 7.66421 3.25 7.25 3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H7.25C7.66421 4.75 8 4.41421 8 4Z"
                fill="#FF7010"
              />
              <path
                d="M4 8C4.41421 8 4.75 7.66421 4.75 7.25L4.75 0.75C4.75 0.335786 4.41421 -1.46777e-08 4 -3.27835e-08C3.58579 -5.08894e-08 3.25 0.335786 3.25 0.75L3.25 7.25C3.25 7.66421 3.58579 8 4 8Z"
                fill="#FF7010"
              />
            </g>
            <defs>
              <clipPath id="clip0_4404_11673">
                <rect width="8" height="8" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="order__price">{price * count} ₽</div>
      <button onClick={onClickRemove} className="order__clear-button">
        Убрать товар из корзины
      </button>
    </div>
  );
};

export default Order;
