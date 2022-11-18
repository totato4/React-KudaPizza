import React from "react";
import Order from "../Order";
import { Carousel } from "./Carousel";
import { CarouselCompound } from "./CarouselCompound";
import { AddSliderItem } from "../index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Slider({ label, isLoading, drinks }) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // for (let i = 0; i < 8; i++) {
  //   cardArray.push(i);
  // }

  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     let j = Math.random() * (i + 1);
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  // }
  console.log(drinks);

  function shuffle(a) {
    a.sort(() => Math.random() - 0.5);
  }

  // const isLoaded = useSelector((state) => state.product.isLoaded);
  // const allData = useSelector((state) => state.product);

  return (
    <div className="app__main-container">
      <Carousel>
        {isLoading
          ? drinks.map((obj, index) => (
              <CarouselCompound.Slide key={index}>
                <AddSliderItem name={obj.name} />
              </CarouselCompound.Slide>
            ))
          : Array(8)
              .fill(0)
              .map((_, index) => <div key={index}>Loading</div>)}
      </Carousel>

      <div className="add-slider__wrapper">
        <div className="add-slider__label">{label}</div>
        <div className="add-slider__container">
          <CarouselCompound>
            {isLoading
              ? drinks.map((obj, index) => (
                  <CarouselCompound.Slide key={index}>
                    <AddSliderItem name={obj.name} />
                  </CarouselCompound.Slide>
                ))
              : Array(8)
                  .fill(0)
                  .map((_, index) => <div key={index}>Loading</div>)}
          </CarouselCompound>
        </div>
      </div>
    </div>
  );
}

export default Slider;

// <Order />
// <Order />
// <Order />
