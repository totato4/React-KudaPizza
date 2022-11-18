import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../RTK/filter/filterSlice";
import { Sort } from "../RTK/filter/types";
import { useWhyDidYouUpdate } from "ahooks";

type PopupClick = React.MouseEvent<HTMLBodyElement> & { path: Node[] };

export const arrSortPopup: Sort[] = [
  { name: "популярности ↑", type: "rating" },
  {
    name: "популярности ↓",
    type: "-rating",
  },
  { name: "цене ↑", type: "price" },
  { name: "цене ↓", type: "-price" },
  { name: "алфавиту ↑", type: "title" },
  { name: "алфавиту ↓", type: "-title" },
];

const Filter: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const sortState = useSelector((state: any) => state.filterSlice.sort.type);

  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);

  const sortRef = React.useRef<HTMLDivElement>(null);
  // const activeLable = arrSortPopup.find(
  //   (obj) => obj.index === activeSortType
  // ).name;

  const onSelectItem = (obj: Sort, index: number) => {
    setActiveItem(index);
    dispatch(setSort(obj));
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const activeItemReset = () => {
    setActiveItem(-1);
  };

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const _event = event as MouseEvent & PopupClick;
      if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
        setVisiblePopup(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // useWhyDidYouUpdate("Filter", { sortState, activeItem, visiblePopup });

  return (
    <div className="">
      <div ref={sortRef} className={visiblePopup ? "filter" : "filter"}>
        <button className="filter__button" onClick={toggleVisiblePopup}>
          <img
            src="img/home/product/filter/filter.png"
            alt="filter"
            className="filter__img"
          />
          <div className="filter__name">Фильтры</div>
        </button>
        {visiblePopup ? (
          <div className="filter__modal">
            <div className="filter__list">
              <div className="modal__head">
                <div className="modal__title">Фильтры</div>
                <button className="modal__close" onClick={toggleVisiblePopup}>
                  <img
                    src="img/home/product/filter/close.png"
                    alt=""
                    className="close__img"
                  />
                </button>
              </div>
              <div className="modal__category">
                <div className="category__title">Общее</div>
                <div className="modal-item__list">
                  {arrSortPopup.map((obj, index) => (
                    <li
                      className={
                        activeItem === index
                          ? "modal__item modal__item_active"
                          : "modal__item"
                      }
                      onClick={() => onSelectItem(obj, index)}
                      key={`${index}`}
                    >
                      {obj.name}
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-button__container">
              <button
                className="modal-button modal-button_reset"
                onClick={activeItemReset}
              >
                Сбросить
              </button>
              <button
                className="modal-button modal-button_select"
                onClick={toggleVisiblePopup}
              >
                Применить
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
});

export default Filter;

// { <div className="filter__modal">
//             <div className="filter__list">
//               <div className="modal__head">
//                 <div className="modal__title">Фильтры</div>
//                 <button className="modal__close" onClick={toggleVisiblePopup}>
//                   <img
//                     src="img/home/product/filter/close.png"
//                     alt=""
//                     className="close__img"
//                   />
//                 </button>
//               </div>
//               <div className="modal__category">
//                 <div className="category__title">Общее</div>
//                 <div className="modal-item__list">
//                   {arrModa.main.map((obj, index) => (
//                     <li
//                       className={
//                         activeItem === index
//                           ? "modal__item modal__item_active"
//                           : "modal__item"
//                       }
//                       onClick={() => onSelectItem(index)}
//                       key={`${index}`}
//                     >
//                       {obj.name}
//                     </li>
//                   ))}
//                 </div>
//               </div>
//               <div className="modal__category">
//                 <div className="category__title">Сыр</div>
//                 <div className="modal-item__list">
//                   {arrModa.cheese.map((obj, index) => (
//                     <li
//                       className={
//                         activeItem2 === index
//                           ? "modal__item modal__item_active"
//                           : "modal__item"
//                       }
//                       onClick={() => onSelectItem2(index)}
//                       key={`${index}`}
//                     >
//                       {obj.name}
//                     </li>
//                   ))}
//                 </div>
//               </div>
//               <div className="modal__category">
//                 <div className="category__title">Мясо</div>
//                 <div className="modal-item__list">
//                   {arrModa.meat.map((obj, index) => (
//                     <li
//                       className={
//                         activeItem3 === index
//                           ? "modal__item modal__item_active"
//                           : "modal__item"
//                       }
//                       onClick={() => onSelectItem3(index)}
//                       key={`${index}`}
//                     >
//                       {obj.name}
//                     </li>
//                   ))}
//                 </div>
//               </div>
//               <div className="modal__category">
//                 <div className="category__title">Начинка</div>
//                 <div className="modal-item__list">
//                   {arrModa.filling.map((obj, index) => (
//                     <li
//                       className={
//                         activeItem4 === index
//                           ? "modal__item modal__item_active"
//                           : "modal__item"
//                       }
//                       onClick={() => onSelectItem4(index)}
//                       key={`${index}`}
//                     >
//                       {obj.name}
//                     </li>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="modal-button__container">
//               <button
//                 className="modal-button modal-button_reset"
//                 onClick={(toggleVisiblePopup, activeItemReset)}
//               >
//                 Сбросить
//               </button>
//               <button
//                 className="modal-button modal-button_select"
//                 onClick={toggleVisiblePopup}
//               >
//                 Применить
//               </button>
//             </div>
//           </div> }

// const arrModa = {
//   main: [
//     { name: "Хит", type: "onmeat", order: "desc" },
//     { name: "Новинка", type: "price", order: "asc" },
//     { name: "C мясом", type: "price", order: "asc" },
//     { name: "Вегетарианская", type: "price", order: "asc" },
//     { name: "С курицей", type: "price", order: "asc" },
//     { name: "Без лука", type: "price", order: "asc" },
//     { name: "С грибами", type: "price", order: "asc" },
//     { name: "С морепродуктами", type: "price", order: "asc" },
//     { name: "Барбекью", type: "price", order: "asc" },
//   ],

//   cheese: [
//     { name: "Реджанито", type: "chees1", order: "asc" },
//     { name: "Моцарелла", type: "chees2", order: "asc" },
//     { name: "Чеддер", type: "chees3", order: "asc" },
//     { name: "С голубой плесенью", type: "chees4", order: "asc" },
//     { name: "Смесь итальянских сыров", type: "chees5", order: "asc" },
//     { name: "Мягкий молодой сыр", type: "chees6", order: "asc" },
//   ],
//   meat: [
//     { name: "Пепперони", type: "meat1", order: "asc" },
//     { name: "Свинина", type: "meat2", order: "asc" },
//     { name: "Ветчина", type: "meat3", order: "asc" },
//     { name: "Бекон", type: "meat4", order: "asc" },
//     { name: "Говядина", type: "meat5", order: "asc" },
//     { name: "Чоризо", type: "meat6", order: "asc" },
//     { name: "Колбаски", type: "meat7", order: "asc" },
//     { name: "Куриная грудка", type: "meat8", order: "asc" },
//   ],
//   filling: [
//     { name: "Креветка", type: "comp1", order: "asc" },
//     { name: "Ананасы", type: "comp2", order: "asc" },
//     { name: "Шампиньоны", type: "comp3", order: "asc" },
//     { name: "Лук", type: "comp4", order: "asc" },
//     { name: "Перец халапеньо", type: "comp5", order: "asc" },
//     { name: "Орегано", type: "comp6", order: "asc" },
//     { name: "Зеленый перец", type: "comp7", order: "asc" },
//     { name: "Томаты", type: "comp8", order: "asc" },
//     { name: "Чеснок", type: "comp9", order: "asc" },
//     { name: "Красный перец", type: "comp10", order: "asc" },
//     { name: "Оливки", type: "comp11", order: "asc" },
//     { name: "Маслины", type: "comp12", order: "asc" },
//     { name: "Клубника", type: "comp13", order: "asc" },
//     { name: "Смесь итальянских трав", type: "comp14", order: "asc" },
//   ],
// };

// const arrModal = [
//   [
//     { name: "Хит", type: "main1", order: "desc" },
//     { name: "Новинка", type: "main2", order: "asc" },
//     { name: "C мясом", type: "main3", order: "asc" },
//     { name: "Вегетарианская", type: "main4", order: "asc" },
//     { name: "С курицей", type: "main5", order: "asc" },
//     { name: "Без лука", type: "main6", order: "asc" },
//     { name: "С грибами", type: "main7", order: "asc" },
//     { name: "С морепродуктами", type: "main8", order: "asc" },
//     { name: "Барбекью", type: "main9", order: "asc" },
//   ],
//   [
//     { name: "Реджанито", type: "chees1", order: "asc" },
//     { name: "Моцарелла", type: "chees2", order: "asc" },
//     { name: "Чеддер", type: "chees3", order: "asc" },
//     { name: "С голубой плесенью", type: "chees4", order: "asc" },
//     { name: "Смесь итальянских сыров", type: "chees5", order: "asc" },
//     { name: "Мягкий молодой сыр", type: "chees6", order: "asc" },
//   ],
//   [
//     { name: "Пепперони", type: "meat1", order: "asc" },
//     { name: "Свинина", type: "meat2", order: "asc" },
//     { name: "Ветчина", type: "meat3", order: "asc" },
//     { name: "Бекон", type: "meat4", order: "asc" },
//     { name: "Говядина", type: "meat5", order: "asc" },
//     { name: "Чоризо", type: "meat6", order: "asc" },
//     { name: "Колбаски", type: "meat7", order: "asc" },
//     { name: "Куриная грудка", type: "meat8", order: "asc" },
//   ],
//   [
//     { name: "Креветка", type: "comp1", order: "asc" },
//     { name: "Ананасы", type: "comp2", order: "asc" },
//     { name: "Шампиньоны", type: "comp3", order: "asc" },
//     { name: "Лук", type: "comp4", order: "asc" },
//     { name: "Перец халапеньо", type: "comp5", order: "asc" },
//     { name: "Орегано", type: "comp6", order: "asc" },
//     { name: "Зеленый перец", type: "comp7", order: "asc" },
//     { name: "Томаты", type: "comp8", order: "asc" },
//     { name: "Чеснок", type: "comp9", order: "asc" },
//     { name: "Красный перец", type: "comp10", order: "asc" },
//     { name: "Оливки", type: "comp11", order: "asc" },
//     { name: "Маслины", type: "comp12", order: "asc" },
//     { name: "Клубника", type: "comp13", order: "asc" },
//     { name: "Смесь итальянских трав", type: "comp14", order: "asc" },
//   ],
// ];
