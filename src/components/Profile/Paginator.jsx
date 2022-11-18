import React from "react";

function Paginator() {
  return (
    <div className="paginator__wrapper">
      <div className="paginator__container _container">
        <button className="paginator__button paginator__button_orange">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8483 17.7272C12.6468 17.7272 12.4451 17.6497 12.2912 17.4948L4.41254 9.56093C4.10468 9.25091 4.10468 8.74889 4.41254 8.43908L12.2912 0.505217C12.5991 0.195201 13.0976 0.195201 13.4053 0.505217C13.713 0.815232 13.7131 1.31725 13.4053 1.62706L6.08361 9L13.4053 16.3729C13.7131 16.683 13.7131 17.185 13.4053 17.4948C13.2515 17.6497 13.0498 17.7272 12.8483 17.7272Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="paginator__button">1</button>
        <button className="paginator__button">2</button>
        <button className="paginator__button">105</button>
        <button className="paginator__button paginator__button_orange">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.15174 17.7272C5.35323 17.7272 5.55493 17.6497 5.70876 17.4948L13.5875 9.56093C13.8953 9.25091 13.8953 8.74889 13.5875 8.43908L5.70876 0.505217C5.4009 0.195201 4.90237 0.195201 4.59471 0.505217C4.28705 0.815232 4.28685 1.31725 4.59471 1.62706L11.9164 9L4.59471 16.3729C4.28685 16.683 4.28685 17.185 4.59471 17.4948C4.74854 17.6497 4.95024 17.7272 5.15174 17.7272Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Paginator;
