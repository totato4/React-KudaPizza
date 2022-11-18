import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ModalPizzaIngredient() {
  const ModalPizza = useSelector((state) => state.modal.item);
  const showModal = useSelector((state) => state.modal.showModal);

  if (showModal) {
    if (ModalPizza.filling.length > 4) {
      return (
        <div className="ingredient__wrapper">
          {ModalPizza.filling.map((obj, index) => (
            <div className="ingredients__item" key={index}>
              <div className="ingredients__image">
                <img src={obj.img} alt="" className="ingredients__img" />
              </div>
              <div className="ingredients__name">{obj.name}</div>
              <div className="ingredients__price"> </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="ingredient__wrapper">
          {ModalPizza.filling.map((obj, index) => (
            <div className="ingredients__item" key={index}>
              <div className="ingredients__image">
                <img src={obj.img} alt="" className="ingredients__img" />
              </div>
              <div className="ingredients__name">{obj.name}</div>
              <div className="ingredients__price"> </div>
            </div>
          ))}
        </div>
      );
    }
  } else {
    return <div className="ingredients__wrapper">no ingredients </div>;
  }
}

export default ModalPizzaIngredient;
