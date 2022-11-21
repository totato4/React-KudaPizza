import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { setItems } from "../RTK/items/itemsSlice";

function ItemPage() {
  interface item {
    imageUrl: string;
    name: string;
    price: number;
  }

  const [item, setItems] = React.useState<item>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(
          `https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items/` + id
        );
        console.log(data);
        setItems(data);
      } catch (error) {
        alert("ошибка при загрузке страницы");
        navigate("/");
      }
    }
    fetchItem();
  }, []);

  const res = axios.get(
    "https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items/1"
  );

  // React.useEffect(() => {
  //   axios
  //     .get(`https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items/` + id)
  //     .then((res) => {
  //       setItems(res.data);
  //     });
  // }, []);

  if (!item) {
    return <div>загрузка...</div>;
  }

  return (
    <div className="main">
      <div className="main__container _container">
        <div className="item-page__wrapper">
          <img
            src="/img/home/pizza.jpg"
            className="item-page__img"
            alt="КАРТИНКА"
          />
          <h2 className="item-page__title">{item.name}</h2>
          <p className="item-page__subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            ipsam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            consequatur maxime molestiae ipsam non velit aperiam ab, incidunt
            odio tenetur explicabo mollitia, doloribus recusandae voluptatibus
            cumque esse minus doloremque provident illum corrupti. At laboriosam
            vel dolor assumenda quidem placeat, cupiditate nihil maxime.
            Dolores, laborum est vero laudantium esse illum molestiae
            repudiandae exercitationem minima ipsum quas iste beatae vitae aut
            eveniet! Laudantium adipisci dolor eum magnam, delectus sapiente
            amet expedita consequatur voluptatibus, incidunt, cum fugiat
            tempora. Magnam aliquid nulla eius at iste omnis sapiente accusamus
            aliquam, sed maxime, illo, aut incidunt? Sapiente, nemo eligendi?
            Non quibusdam reiciendis, aliquam incidunt asperiores aperiam?
          </p>
          <h4 className="item-page__price">{item.price} p</h4>
          <Link className="item-page__button_back" to="/dfawfw">
            <p>Назад</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
