import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../pages";

const Navigation = () => {
  const arrNavMenu = [
    { name: "Акции", type: "stock", link: "/", list: [] },
    { name: "Пицца", type: "pizza", link: "/", list: [] },
    { name: "Суши", type: "sushi", link: "/", list: [] },
    { name: "Напитки", type: "drinks", link: "/", list: [] },
    { name: "Закуски", type: "snacks", link: "/", list: [] },
    { name: "Комбо", type: "combo", link: "/", list: [] },
    { name: "Десерты", type: "deserts", link: "/", list: [] },
    { name: "Соусы", type: "souces", link: "/", list: [] },
    {
      name: "Другое",
      type: "other",
      link: "/",
      list: [
        {
          name: "Акции",
          type: "stock",
          link: "/",
        },
        {
          name: "О компании",
          type: "About company",
          link: "/",
        },
        {
          name: "Пользовательское соглашение",
          type: "Terms of use",
          link: "/",
        },
        {
          name: "Условия гарантии",
          type: "Warranty Terms",
          link: "/",
        },
        {
          name: "Ресторан",
          type: "Restauran",
          link: "/",
        },
        {
          name: "Контакты",
          type: "Contacts",
          link: "/",
        },
        {
          name: "Поддержка",
          type: "Support",
          link: "/",
        },
        {
          name: "Отследить заказ",
          type: "Track your order",
          link: "/",
        },
      ],
    },
  ];

  return (
    <div className="header__header-bottom">
      <div className="header-bottom__logo">
        <Link to="/">
          <div className="logo">
            <div className="logo__logo-icon">
              <img
                src="img/header/logo-icon.png"
                alt="logo-icon"
                className="logo-icon"
              />
            </div>
            <div className="logo__text">Куда пицца</div>
          </div>
        </Link>
      </div>
      <nav className="navigation-menu__nav">
        <ul className="navigation-menu__ul">
          {arrNavMenu.map((obj, index) => (
            <Link to={`${obj.link}`} className="navigation-menu__item">
              {obj.name}
              {obj.map((obj, index) => (
                <Link to={`${obj.link}`} className="navigation-menu__list">
                  {obj.name}
                </Link>
              ))}
            </Link>
          ))}
        </ul>
      </nav>
      <Link to="/Cart">
        <Cart />
      </Link>
    </div>
  );
};

export default Navigation;

// <div className="header__header-bottom">
//   <div className="header-bottom__logo">
//     <Link to="/">
//       <div className="logo">
//         <div className="logo__logo-icon">
//           <img
//             src="img/header/logo-icon.png"
//             alt="logo-icon"
//             className="logo-icon"
//           />
//         </div>
//         <div className="logo__text">Куда пицца</div>
//       </div>
//     </Link>
//   </div>
//   <nav className="navigation-menu__nav">
//     <ul className="navigation-menu__ul">
//       <Link to= className="navigation-menu__item">
//         obj.name
//         <ul className="navigation-menu__list">obj.name</ul>
//       </Link>
//     </ul>
//   </nav>
//   <Link to="/Cart">
//     <Cart />
//   </Link>
// </div>

// {
//   arrNavMenu.map((obj, index) => (
//     <Link to={`${obj.link}`} className="navigation-menu__item">
//       {obj.name}
//       {obj.map((obj, index) => (
//         <Link to={`${obj.link}`} className="navigation-menu__list">
//           {obj.name}
//         </Link>
//       ))}
//     </Link>
//   ));
// }
