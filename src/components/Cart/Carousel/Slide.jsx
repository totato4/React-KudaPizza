import React from "react";
import { useContext } from "react";
import { CarouselContext } from "./CarouselContext";

export const Slide = ({ children }) => {
  const { width } = useContext(CarouselContext);

  return (
    <div
      className="page__main-container"
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
