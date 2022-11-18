import classNames from "classnames";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../RTK/modal/modalSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { showModalAction } from "../redux/actions/modalPizzaAction";
// import { modalPizza } from "../redux/reducers/ModalPizza";
import ModalPizzaIngredient from "./ModalPizzaIngredient";

function ModalPizza() {
  // const [activeDough, setActiveDough] = React.useState[-1];

  const onSelectItem = (index) => {
    setActiveDough(index);
  };

  // showModalAction

  const dispatch = useDispatch();
  // const toggleModalPizza = useSelector(
  //   (state) => state.modalPizza.setModalPizza
  // );
  const ModalPizza = useSelector((state) => state.modal.item);

  const arrDough = [{ name: "Традиционное" }, { name: "Тонкое" }];

  const arrSize = [20, 28, 33];

  const [activeDough, setActiveDough] = React.useState(-1);
  const [activeSize, setActiveSize] = React.useState(-1);

  const onSelectDough = (index) => {
    setActiveDough(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const modalOnClick = () => {
    dispatch(closeModal());
  };

  const showModal = useSelector((state) => state.modal.showModal);

  return (
    <>
      <div
        className={showModal ? "modal-pizza modal-pizza-active" : "modal-pizza"}
        onClick={() => {
          modalOnClick();
        }}
      >
        <div
          className={
            showModal ? "modal-pizza__body active " : "modal-pizza__body"
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="modal-pizza__cancel-button"
            onClick={() => {
              modalOnClick();
            }}
          >
            <img
              src="img/home/modal-pizza/cancel.png"
              alt=""
              className="modal-pizza__img-cancel-button"
            />
          </div>
          <div className="modal-pizza__image">
            <img
              src={`img/home/product/goods/pizza/${ModalPizza.id}.png`}
              alt=""
              className="modal-pizza__img"
            />
            <img src="" alt="" className="modal-pizza__label" />
          </div>
          <div className="modal-pizza__menu">
            <div className="ingredients">
              <div className="modal-pizza__pizza-info">
                <div className="modal-pizza__name">
                  <img
                    src="img/home/modal-pizza/name-label.png"
                    alt=""
                    className="modal-pizza__name-label"
                  />
                  {ModalPizza.name}
                </div>
                <div className="modal-pizza__button-info">
                  <img
                    src="img/home/modal-pizza/info.png"
                    alt=""
                    className="button-info__img"
                  />
                </div>
              </div>
              <div className="modal-pizza__ingredients">
                <ModalPizzaIngredient />
              </div>
            </div>
            <div className="modal-pizza__buttons">
              <div className="modal-pizza__dough">
                {arrDough.map((obj, index) => (
                  <button
                    key={`${index}`}
                    className={classNames({
                      active: activeDough === index,
                      disabled: !ModalPizza.types.includes(index),
                    })}
                    onClick={() => onSelectDough(index)}
                  >
                    {obj.name}
                  </button>
                ))}
              </div>
              <div className="modal-pizza__size">
                {/* {arrSize.map((size, index) => (
                  <button
                    key={`${size}`}
                    className={classNames({
                      active: activeSize === index,
                      disabled: !ModalPizza.sizes.includes(size),
                    })}
                    onClick={() => onSelectSize(index)}
                  >
                    {size}
                  </button>
                ))} */}
              </div>
            </div>
            <div className="ingredients">
              <div className="modal-pizza__add-title">Добавьте в пиццу</div>
              <div className="modal-pizza__ingredients">
                <div className="ingredients__item">
                  <div className="ingredients__image">
                    <img
                      src="img/home/modal-pizza/ing1.png"
                      alt=""
                      className="ingredients__img"
                    />
                  </div>
                  <div className="ingredients__name">Моцарелла</div>
                </div>
                <div className="ingredients__item">
                  <div className="ingredients__image">
                    <img
                      src="img/home/modal-pizza/ing2.png"
                      alt=""
                      className="ingredients__img"
                    />
                  </div>
                  <div className="ingredients__name">Моцарелла</div>
                </div>
                <div className="ingredients__item">
                  <div className="ingredients__image">
                    <img
                      src="img/home/modal-pizza/ing3.png"
                      alt=""
                      className="ingredients__img"
                    />
                  </div>
                  <div className="ingredients__name">Моцарелла</div>
                  <div className="ingredients__price"> </div>
                </div>
                <div className="ingredients__item">
                  <div className="ingredients__image">
                    <img
                      src="img/home/modal-pizza/ing4.png"
                      alt=""
                      className="ingredients__img"
                    />
                  </div>
                  <div className="ingredients__name">Моцарелла</div>
                </div>
              </div>
            </div>
            <div className="modal-pizza__footer">
              <div className="modal-pizza__total">
                <div className="total__total-price">
                  {/* Итого: {ModalPizza.price} ₽ */}
                </div>
                <div className="total__total-weight">400 г</div>
              </div>

              <button className="modal-pizza__select-button">Добавить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalPizza;
