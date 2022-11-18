import React from "react";
import { setCategoryId } from "../RTK/filter/filterSlice";
import { useAppDispatch } from "../RTK/store";

type arrMenu = { name: string; type: string };

type HomeMenuProps = {
  categoryId: number;
};

const arrMenu = [
  { name: "Акции", type: "stock" },
  { name: "Пицца", type: "pizza" },
  { name: "Суши", type: "sushi" },
  { name: "Напитки", type: "drinks" },
  { name: "Закуски", type: "snacks" },
  { name: "Комбо", type: "combo" },
  { name: "Десерты", type: "deserts" },
  { name: "Соусы", type: "souces" },
];

type CategoriesProps = {
  arrMenu: arrMenu[];
};

{
  /* <CategoriesProps> */
}

const HomeMenu: React.FC<HomeMenuProps> = React.memo((categoryId) => {
  const dispatch = useAppDispatch();

  const onClickCategory = React.useCallback((index: number) => {
    dispatch(setCategoryId(index));
  }, []);

  return (
    <nav className="home__menu">
      <ul className="menu__list">
        {arrMenu.map((obj: any, index: any) => (
          <li
            className={
              categoryId === index
                ? "menu__item menu__item_active"
                : "menu__item"
            }
            onClick={() => onClickCategory(index)}
            key={`${index}`}
          >
            <div className="item__body">
              <img
                src={`img/home/menu/${index}.png`}
                alt=""
                className="item__menu-icon"
              />
              <span className="item__text">{obj.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
});

// <li className="menu__item">
//   <div className="item__body">
//     <img src="img/home/menu/2.png" alt="" className="item__menu-icon" />
//     <span className="item__text">Пицца</span>
//   </div>
// </li>
// <li className="menu__item">
//   <div className="item__body">
//     <img src="img/home/menu/3.png" alt="" className="item__menu-icon" />
//     <span className="item__text">Суши</span>
//   </div>
// </li>
// <li className="menu__item">
//   <div className="item__body">
//     <img src="img/home/menu/4.png" alt="" className="item__menu-icon" />
//     <span className="item__text">Напитки</span>
//   </div>
// </li>
// <li className="menu__item">
//   <div className="item__body">
//     <img src="img/home/menu/5.png" alt="" className="item__menu-icon" />
//     <span className="item__text">Закуски</span>
//   </div>
// </li>
// <li className="menu__item">
//   <div className="item__body">
//     <img src="img/home/menu/6.png" alt="" className="item__menu-icon" />
//     <span className="item__text">Комбо</span>
//   </div>
// </li>
// <li className="menu__item">
//   <div className="item__body">
//     <img src="img/home/menu/7.png" alt="" className="item__menu-icon" />
//     <span className="item__text">Десерты</span>
//   </div>
// </li>
// <li className="menu__item">
//   <div className="item__body">
//     <img src="img/home/menu/8.png" alt="" className="item__menu-icon" />
//     <span className="item__text">Соусы</span>
//   </div>
// </li>

export default HomeMenu;
