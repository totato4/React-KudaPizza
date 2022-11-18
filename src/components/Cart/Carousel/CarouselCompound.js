import { useState, useEffect, Children, cloneElement } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CarouselContext } from "./CarouselContext";
import { Slide } from "./Slide";

const PAGE_WIDTH = 190;
const PAD_WIDTH = PAGE_WIDTH + 30;

export const CarouselCompound = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH + 30;

      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH - 30;

      const maxOffset = -((PAGE_WIDTH + 30) * (pages.length - 4));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  return (
    <CarouselContext.Provider value={{ width: PAGE_WIDTH }}>
      <div className="carousel__container">
        <button
          className="add-slider__spin-button"
          onClick={handleLeftArrowClick}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
              fill="#FF7010"
            />
            <path
              d="M22.3736 27.2728C22.2056 27.2728 22.0376 27.2081 21.9094 27.079L15.3438 20.4675C15.0872 20.2091 15.0872 19.7908 15.3438 19.5326L21.9094 12.9211C22.1659 12.6627 22.5814 12.6627 22.8377 12.9211C23.0941 13.1794 23.0943 13.5977 22.8377 13.8559L16.7363 20L22.8377 26.1442C23.0943 26.4025 23.0943 26.8209 22.8377 27.079C22.7095 27.2081 22.5415 27.2728 22.3736 27.2728Z"
              fill="white"
            />
          </svg>
        </button>

        <div className="carousel-window">
          <div
            className="carousel-items__container"
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {pages}
          </div>
        </div>
        <button
          className="add-slider__spin-button"
          onClick={handleRightArrowClick}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20Z"
              fill="#FF7010"
            />
            <path
              d="M17.6264 27.2728C17.7944 27.2728 17.9624 27.2081 18.0906 27.079L24.6562 20.4675C24.9128 20.2091 24.9128 19.7908 24.6562 19.5326L18.0906 12.9211C17.8341 12.6627 17.4186 12.6627 17.1623 12.9211C16.9059 13.1794 16.9057 13.5977 17.1623 13.8559L23.2637 20L17.1623 26.1442C16.9057 26.4025 16.9057 26.8209 17.1623 27.079C17.2905 27.2081 17.4585 27.2728 17.6264 27.2728Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </CarouselContext.Provider>
  );
};

CarouselCompound.Slide = Slide;
