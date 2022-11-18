import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Iitem } from "../../RTK/items/types";
import { addItems } from "../../RTK/cart/slice";
import { Link } from "react-router-dom";
import { cartItemByIdSelector } from "../../RTK/cart/selectors";

const Product: React.FC<Iitem> = ({
  id,
  hit,
  recent,
  name,
  price,
  filling,
  types,
  type,
  category,
  rating,
  sizes,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const countItem = useSelector(cartItemByIdSelector(id));
  // const countItem = useSelector((state) => cartItemByIdSelector(id, state));
  const count = 1;
  const addedCount = countItem ? countItem.count : "";

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const onClickAdd = () => {
    const item: Iitem = {
      types: activeType,
      sizes: activeSize,
      id,
      name,
      count,
      imageUrl,
      price,
    };
    dispatch(addItems(item));
  };

  // const dispatch = useDispatch();
  // const modalPizza = useSelector((state) => state.modalPizza.modalPizza);
  // const SET_MODAL_PIZZA = "SET_MODAL_PIZZA";
  // const MINUS_COUNT = "MINUS_COUNT";

  // const modalPizzaAction = (payload) => ({
  //   type: SET_MODAL_PIZZA,
  //   payload,
  // });

  // const modalOnclick = (e) => {
  //   dispatch(modalPizzaAction(e));
  // };

  // const setModalPizzaShow = () => {
  //   setModalPizza(true);
  // };

  // console.log("render PRODUCT");

  return (
    <div className="item-body">
      <div className="item-img">
        <img
          src="img/home/product/label/label.png"
          alt="alt"
          className={
            Boolean(recent) === true
              ? "item__label item__label_active"
              : "item__label"
          }
        />
        <Link key={id} to={`/item/${id}`}>
          <img src={`${imageUrl}`} alt="alt" className="item__img" />
        </Link>
      </div>
      <div className="item-text-wrapper">
        <div className="item-text">
          <div className="item__title">{name}</div>

          <div className="item__subtitle">
            {category == 1
              ? filling &&
                filling.map((obj: any, index: number) => `${obj.name}, `)
              : filling && filling.map((obj: any) => `${obj}, `)}
          </div>
        </div>
      </div>
      <div className="item-bottom">
        <div>
          {addedCount ? (
            <button className="item__buttom_clicked" onClick={onClickAdd}>
              Выбрано {addedCount}
            </button>
          ) : (
            <button className="item__button" onClick={onClickAdd}>
              Выбрать
            </button>
          )}
        </div>

        <div className="item__price">от {price} ₽</div>
      </div>
    </div>
  );
};

// <div className="item-body">
//   <div className="item-img">
//     <img
//       src="img/home/product/label/label.png"
//       alt="alt"
//       className="item__label item__label_active"
//     />
//     <img
//       src="img/home/product/pizzas/2.png"
//       alt="alt"
//       className="item__img"
//     />
//   </div>
//   <div className="item-text-wrapper">
//     <div className="item-text">
//       <div className="item__title">Огуречная с колбасой</div>
//       <div className="item__subtitle">
//         Курица, Лук, Перец Халапеньо...
//       </div>
//     </div>
//     <div className="item-bottom">
//       <div className="item__button">Выбрать</div>
//       <div className="item__price">
//         <p className="item__text">от 549 ₽</p>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="item-body">
//   <div className="item-img">
//     <img src="" alt="alt" className="item__label" />
//     <img
//       src="img/home/product/pizzas/3.png"
//       alt="alt"
//       className="item__img"
//     />
//   </div>
//   <div className="item-text-wrapper">
//     <div className="item-text">
//       <div className="item__title">Чикен а-ля хрен</div>
//       <div className="item__subtitle">
//         Курица, Лук, Соус Карбонара,...
//       </div>
//     </div>
//     <div className="item-bottom">
//       <div className="item__button">Выбрать</div>
//       <div className="item__price">от 249 ₽</div>
//     </div>
//   </div>
// </div>
// <div className="item-body">
//   <div className="item-img">
//     <img src="" alt="alt" className="item__label" />
//     <img
//       src="img/home/product/pizzas/4.png"
//       alt="alt"
//       className="item__img"
//     />
//   </div>
//   <div className="item-text-wrapper">
//     <div className="item-text">
//       <div className="item__title">4 сезона</div>
//       <div className="item__subtitle">
//         Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...
//       </div>
//     </div>
//     <div className="item-bottom">
//       <div className="item__button">Выбрать</div>
//       <div className="item__price">от 630 ₽</div>
//     </div>
//   </div>
// </div>
// <div className="item-body">
//   <div className="item-img">
//     <img src="" alt="alt" className="item__label" />
//     <img
//       src="img/home/product/pizzas/1.png"
//       alt="alt"
//       className="item__img"
//     />
//   </div>
//   <div className="item-text-wrapper">
//     <div className="item-text">
//       <div className="item__title">Чикен Сладкий Чили</div>
//       <div className="item__subtitle">
//         Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
//       </div>
//     </div>
//     <div className="item-bottom">
//       <div className="item__button">Выбрать</div>
//       <div className="item__price">от 399 ₽</div>
//     </div>
//   </div>
// </div>
// <div className="item-body">
//   <div className="item-img">
//     <img src="" alt="alt" className="item__label" />
//     <img
//       src="img/home/product/pizzas/2.png"
//       alt="alt"
//       className="item__img"
//     />
//   </div>
//   <div className="item-text-wrapper">
//     <div className="item-text">
//       <div className="item__title">Огуречная с колбасой</div>
//       <div className="item__subtitle">
//         Курица, Лук, Перец Халапеньо...
//       </div>
//     </div>
//     <div className="item-bottom">
//       <div className="item__button">Выбрать</div>
//       <div className="item__price">от 549 ₽</div>
//     </div>
//   </div>
// </div>
// <div className="item-body">
//   <div className="item-img">
//     <img src="" alt="alt" className="item__label" />
//     <img
//       src="img/home/product/pizzas/3.png"
//       alt="alt"
//       className="item__img"
//     />
//   </div>
//   <div className="item-text-wrapper">
//     <div className="item-text">
//       <div className="item__title">Чикен а-ля хрен</div>
//       <div className="item__subtitle">
//         Курица, Лук, Соус Карбонара,...
//       </div>
//     </div>
//     <div className="item-bottom">
//       <div className="item__button">Выбрать</div>
//       <div className="item__price">от 249 ₽</div>
//     </div>
//   </div>
// </div>
// <div className="item-body">
//   <div className="item-img">
//     <img src="" alt="alt" className="item__label" />
//     <img
//       src="img/home/product/pizzas/4.png"
//       alt="alt"
//       className="item__img"
//     />
//   </div>
//   <div className="item-text-wrapper">
//     <div className="item-text">
//       <div className="item__title">4 сезона</div>
//       <div className="item__subtitle">
//         Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...
//       </div>
//     </div>
//     <div className="item-bottom">
//       <div className="item__button">Выбрать</div>
//       <div className="item__price">от 630 ₽</div>
//     </div>
//   </div>
// </div>

export default Product;
