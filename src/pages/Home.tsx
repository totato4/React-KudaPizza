import React from "react";
import qs from "qs";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../RTK/store";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";

import { ModalPizza, HomeMenu, Filter, Search } from "../components";
import { LoadingBlock, Product } from "../components/Product";

import { setCurrentPage } from "../RTK/filter/filterSlice";
import { fetchItems } from "../RTK/items/itemsSlice";
import { Iitem } from "../RTK/items/types";
import { filterSelector } from "./../RTK/filter/selectors";
import { itemsSelector } from "./../RTK/items/selectors";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(itemsSelector);

  //QS PARAMETERS
  const navigate = useNavigate();

  //PAGINATION
  const { currentPage } = useSelector(filterSelector);
  const onChangePage = React.useCallback((number: number) => {
    dispatch(setCurrentPage(number));
  }, []);

  const [show, setShow] = React.useState<boolean>(false);

  const toggleVisibleShow = (e: boolean) => {
    setShow(e);
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
  const { categoryId } = useSelector(filterSelector);
  const { sort } = useSelector(filterSelector);
  const { searchValue } = useSelector(filterSelector);

  const [pizItems, setPizItems] = React.useState([]);

  React.useEffect(() => {
    const sortBy = sort.type.replace("-", "");
    const order = sort.type.includes("-") ? "asc" : "desc";
    const category =
      categoryId > 0 ? `category=${categoryId}` : `new=${Number(1)}`;
    const search = searchValue ? `name=${searchValue}` : "";
    const navPage = currentPage
      ? `page=${Number(currentPage)}&limit=8`
      : `page=${Number(1)}&limit=8`;

    dispatch(
      fetchItems({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );
    // axios
    //   .get(
    //     `https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items?${search}&${category}&sortBy=${sortBy}&order=${order}&page=${currentPage}&limit=8`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     dispatch(setItems(res.data));
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     dispatch(setItems([]));
    //     setIsLoading(false);
    //   });
  }, [categoryId, sort, searchValue, currentPage]);

  const skeleton = [...new Array(8)].map((_, index) => (
    <LoadingBlock key={index} />
  ));

  // Array(8)
  // .fill(0)
  // .map((_, index) => <LoadingBlock key={index} />);

  const mapItems = items.map((obj: Iitem, index: number) => (
    <Product key={index} {...obj} />
  ));

  return (
    <div className="main">
      <ModalPizza
      // modalPizzaActive={modalPizzaActive}
      // setModalPizza={setModalPizza}
      />

      <div className="main__container _container">
        <HomeMenu categoryId={categoryId} />
        <div className="banner">
          <div className="banner__body">
            <div className="banner__item">
              <img src="img/home/banner/1.png" alt="" className="banner-img" />
              <div className="banner__title">
                3 средние пиццы <br /> от 999 рублей
              </div>
            </div>
            <div className="banner__item">
              <img src="img/home/banner/2.png" alt="" className="banner-img" />
              <div className="banner__title">
                Кэшбек 10% на <br /> самовывоз (доставка)
              </div>
            </div>
            <div className="banner__item">
              <img src="img/home/banner/1.png" alt="" className="banner-img" />
              <div className="banner__title">
                3 средние пиццы <br /> от 999 рублей
              </div>
            </div>
            <div className="banner__item">
              <img src="img/home/banner/2.png" alt="" className="banner-img" />
              <div className="banner__title">
                Кэшбек 10% на <br /> самовывоз (доставка)
              </div>
            </div>
          </div>
        </div>
        <Search />
        <div className="product">
          <div className="product__container">
            <div className="product-header">
              <div className="product-title">
                {categoryId ? arrMenu[categoryId].name : ""}
              </div>
              <Filter />
            </div>
            <div className="item__container">
              {status === "error" ? (
                <div>
                  <h2>Не удалось загрузить товары</h2>
                  <p>Попробуйте повторить попытку позже.</p>
                </div>
              ) : status === "loading" ? (
                skeleton
              ) : (
                mapItems
              )}
            </div>
          </div>
        </div>
        <div className="pagination">
          <Pagination onChangePage={onChangePage} currentPage={currentPage} />
        </div>
        <div className="deliv-in-msk">
          <div
            className={
              show ? "deliv-in-msk__body-hidden" : "deliv-in-msk__body"
            }
          >
            <div
              className={
                show
                  ? "deliv-in-msk__background_hidden"
                  : "deliv-in-msk__background"
              }
            ></div>
            <h2 className="deliv-in-msk__title">Доставка пиццы в Москве</h2>{" "}
            <br />
            <div
              className={
                show ? "deliv-in-msk__text" : "deliv-in-msk__text_opacity"
              }
            >
              <p>
                Захотелось чего-то вкусного и сытного? Желание простое и
                понятное, только в холодильнике все не то, и до магазина идти
                лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень
                просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у
                всякого супергероя, у Domino’s Pizza есть свои суперсилы:
                восхитительный вкус продукции из отборных ингредиентов; широкий
                ассортимент, включающий легендарные, фирменные и классические
                виды, для вегетарианцев и любителей экспериментировать; быстрая
                и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и
                ароматное блюдо не успевало остыть.
              </p>
              <br />
              <div className="deliv-in-msk__subtitle">
                Как сделать заказ
              </div>{" "}
              <br />
              <p>
                Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать
                или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом
                в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам
                необходимо: выбрать понравившийся вариант и количество порций;
                положить желаемое в «Корзину»; не уходить далеко, так как
                вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей
                пиццерии Domino’s. И не забудьте оплатить заказ курьеру!
              </p>
              <div
                className={
                  show ? "deliv-in-msk__button_hidden" : "deliv-in-msk__button"
                }
                onClick={() => toggleVisibleShow(true)}
              >
                Показать полностью...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// const isPizza = false;

// const [categoryId, setcategoryId] = React.useState(["Пицца"]);

// const [modalPizzaActive, setModalPizza] = React.useState(false);

// const setsSort = useSelector((state) => state.sortReducer.sortCategory);

// React.useEffect(() => {
//   dispatch(asyncAddProducts());
// }, [activeItem]);

// React.useEffect(() => {
//   dispatch(setSortCategory(activeItem));
// }, [activeItem]);

// // REDUX RTK
// const product = useAppSelector((state) => state.productReducer)

// const isLoaded = useAppSelector((state) => state.productReducer.isLoading )

// // REDUX RTK
// const prodData = useAppSelector((state) => state.productReducer.product)

//   //  REDUX RTK

// const toggleModalPizza = useAppSelector(
//    (state) => state.ModalSlice.visibility
//  )

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

//   React.useEffect(() => {
//   dispatch(fetchProduct())
// })

// const dispatch = useAppDispatch();

// const { product, isLoading, error } = useAppSelector(
//   (state) => state.productReducer
// );

// let cloneProdData = prodData.slice();

// shuffle(cloneProdData);
// console.log(cloneProdData);

// window.addEventListener("mousemove", (e) => {
//   let xPos = e.clientX;
//   let yPos = e.clientY;
// });

// window.addEventListener("scroll", (e) => {
//   let yPos = e.clientY;
//   console.log(yPos);
// });
// const animItems = document.querySelectorAll(".navigation-menu_body");
// if (animItems.length > 0) {
//   window.addEventListener("scroll", animOnScroll);
//   function animOnScroll(params) {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }
//       if (
//         animItems.pageYOffset > animItemOffset - animItemPoint &&
//         animItems.pageYOffset < animItemOffset + animItemHeight
//       ) {
//         animItem.classList.add(".navigation-menu_body_scrolling");
//       } else {
//         animItem.classList.remove(".navigation-menu_body_scrolling");
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }
// }

// React.useEffect(() => {
//   axios.get("http://localhost:3000/db.json").then(({ data }) => {
//     dispatch(setProduct(data.pizza));
//   });
// }, []);

// React.useEffect(() => {
//   if (window.location.search) {
//     const params = qs.parse(window.location.search.substring(1));
//     console.log(params);
//     const sort = arrSortPopup.find(
//       (obj) => obj.sortProperty == params.sortProperty
//     );
//     console.log(params);

//     dispatch(
//       setFilters({
//         ...params,
//         sort,
//       })
//     );
//     isSearch.current = true;
//   }
// }, []);

//                                             15 УРОК МИЛЛИОН ЭРРОРОВ
// React.useEffect(() => {
//   if (window.location.search) {
//     const params = qs.parse(window.location.search.substring(1));
//     const sortList = arrSortPopup.find((obj) => obj.type == params.sort.type);

//     console.log(params.sort.type);
//     dispatch(
//       setFilters({
//         ...params,
//       })
//     );
//   }
// }, []);

// React.useEffect(() => {
//   setIsLoading(true);
//   const sortBy = sort.type.replace("-", "");
//   const order = sort.type.includes("-") ? "asc" : "desc";
//   const category =
//     categoryId > 0 ? `category=${categoryId}` : `new=${Number(1)}`;
//   const search = searchValue ? `name=${searchValue}` : "";
//   const navPage = currentPage
//     ? `page=${Number(currentPage)}&limit=8`
//     : `page=${Number(1)}&limit=8`;

//   // const navCategory = `${
//   //   categoryId ? `&category=${categoryId}` : `&category=${0}`
//   // }`;
//   // const navSortBy = sort
//   //   ? `&sortBy=${sort.type}`
//   //   : `&sortBy=rating%26order%3Ddesc`;

//   // const navSortBy = `${sort}`;

//   //   axios
//   //     .get(
//   //       `https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items?${search}&${category}&sortBy=${sortBy}&order=${order}&page=${currentPage}&limit=8`
//   //     )
//   //     .then((res) => {
//   //       setPizItems(res.data);
//   //       setIsLoading(false);
//   //     })
//   //     .catch((err) => {
//   //       setPizItems([]);
//   //       setIsLoading(false);
//   //     });
//   // }, [categoryId, sort, searchValue, currentPage]);

//   axios
//     .get(
//       `https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items?${search}&${category}&sortBy=${sortBy}&order=${order}&page=${currentPage}&limit=8`
//     )
//     .then((res) => {
//       console.log(res.data);
//       dispatch(setItems(res.data));
//       setIsLoading(false);
//     })
//     .catch((err) => {
//       dispatch(setItems([]));
//       setIsLoading(false);
//     });
// }, [categoryId, sort, searchValue, currentPage]);

// const fetchItems = () => {
//   setIsLoading(true);
//   const sortBy = sort.type.replace("-", "");
//   const order = sort.type.includes("-") ? "asc" : "desc";
//   const category = categoryId > 0 ? `category=${categoryId}` : `categor=0`;
//   const search = searchValue ? `name=${searchValue}` : "";
//   const navPage = pageId ? `page=${pageId}&limit=8` : "";

//   // const navCategory = `${
//   //   categoryId ? `&category=${categoryId}` : `&category=${0}`
//   // }`;
//   // const navSortBy = sort
//   //   ? `&sortBy=${sort.type}`
//   //   : `&sortBy=rating%26order%3Ddesc`;

//   // const navSortBy = `${sort}`;

//   axios
//     .get(
//       `https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items?page=${pageId}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`
//     )
//     .then((res) => {
//       setPizItems(res.data);
//       setIsLoading(false);
//     });
// };

// const search = searchValue ? `search=${searchValue}` : "";
// const navPage = pageId ? `&page=${pageId}&limit=8` : "";
// const navCategory = `${
//   categoryId > 0 ? `&category=${categoryId}` : `&category=0`
// }`;
// const navSortBy = sort ? `${sort}` : "";

// React.useEffect(() => {
//   const fetchItems = () => {
//     setIsLoading(true);
//     const sortBy = sort.type.replace("-", "");
//     const order = sort.type.includes("-") ? "asc" : "desc";
//     const category = categoryId > 0 ? `category=${categoryId}` : `categor=0`;
//     const search = searchValue ? `name=${searchValue}` : "";
//     const navPage = pageId ? `page=${pageId}&limit=8` : "";

//     axios
//       .get(
//         `https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items?page=${navPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`
//       )
//       .then((res) => {
//         setPizItems(res.data);
//         setIsLoading(false);
//       });
//   };
// }, [categoryId, sort, searchValue, pageId]);

// React.useEffect(() => {
//   window.scrollTo(0, 0);
//   if (!isSearch.current) {
//     fetchItems();
//   }
//   isSearch.current = false;
// }, [categoryId, sort, searchValue, pageId]);

//                                                    15 УРОК, МИЛЛИОН ЭРОРОВ

// React.useEffect(() => {
//   if (isMounted.current) {
//     const queryString = qs.stringify({
//       category: categoryId,
//       sort: sort,
//       page: currentPage,
//       search: searchValue,
//     });
//     navigate(`?${queryString}`);
//   }
//   isMounted.current = true;
// }, [categoryId, sort, searchValue, currentPage]);

// const isLoaded = useSelector((state) => state.product.isLoaded);
// const prodData = useSelector((state) => state.product.items);
// const isLoadedCategory = useSelector((state) => state.sortReducer.isLoaded);
// console.log(isLoadedCategory);
// const allData = useSelector((state) => state.product.products);

// const toggleModalPizza = useSelector(
//   (state) => state.modalPizza.setModalPizza
// );
