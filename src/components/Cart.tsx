import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "./../RTK/cart/selectors";

const Cart: React.FC = () => {
  // Количество товаров в корзине сумма (не используется сейчас)
  const { items, totalPrice } = useSelector(cartSelector);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [totalPrice, items]);

  return (
    <button className="header-bottom__cart">
      <div className="header-bottom__button">
        <div className="button__cart-icon">
          <img
            src="img/header/cart-icon.png"
            alt="cart-icon"
            className="cart-icon"
          />
        </div>
        <div className="button__cart-price">{totalPrice} ₽</div>
      </div>
    </button>
  );
};

export default Cart;
