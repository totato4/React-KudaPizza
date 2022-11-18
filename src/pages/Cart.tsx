import axios from "axios";
import React from "react";
import { OrderList, ContactsForm, DelivForm } from "../components/Cart/index";

const Cart: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [drinks, setDrinks] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(false);
    axios
      .get(`https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items?category=3`)
      .then((res) => {
        setDrinks(res.data);
        setIsLoading(true);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="main">
        <div className="main__container _container">
          <OrderList />
          {/* <Slider
            label="Добавить к заказу?"
            isLoading={isLoading}
            drinks={drinks}
          /> */}

          {/* <div>
            {isLoading
              ? drinks.map((obj, index) => (
                  <div className="add-slider__item-wrapper">
                    <div className="add-slider__img-wrapper">
                      <img
                        src={obj.imageUrl}
                        alt="abc"
                        className="add-slider-img"
                      />
                    </div>
                    <div className="add-slider__title">{obj.name}</div>
                    <div className="add-slider__subtitle">Порция 95 г</div>
                    <button className="add-slider__button">179 ₽</button>
                  </div>
                ))
              : Array(8)
                  .fill(0)
                  .map((_, index) => <div key={index}>Loading</div>)}
          </div> */}

          {/* {isLoading ? <div>{drinks[1].name}</div> : <div>HELLO</div>} */}
          <ContactsForm />
          <DelivForm />
        </div>
      </div>
    </div>
  );
};

export default Cart;

// <div className="wrapper">
//   <HeaderCart />
//   <div className="main">
//     <div className="main__container _container">
//       <OrderList />
//       <Slider label="Добавить к заказу?" />
//       <Slider label="Соусы" />
//       <ContactsForm />
//       <DelivForm />
//     </div>
//     <Footer />
//   </div>
// </div>
