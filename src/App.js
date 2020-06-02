import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Guys</h1>
      <h2>React Star ratings!</h2>
      <StarRatings />
    </div>
  );
}

const Star = props => {
  var toggleClass = false;
  if (props.id <= props.rating) {
    toggleClass = "red";
  } else {
    toggleClass = "black";
  }
  return (
    <span
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
      className={toggleClass}
    >
      <svg
        stroke="black"
        fill={toggleClass}
        className="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
        id="Capa_1"
        enable-background="new 0 0 512.07 512.07"
        height="512"
        viewBox="0 0 512.07 512.07"
        width="512"
      >
        <g>
          <path d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298z" />
        </g>
      </svg>
    </span>
  );
};

const StarRatings = () => {
  const [rating, setRating] = useState(0);
  const [hoverState, setHoverState] = useState(0);
  const list = [1, 2, 3, 4, 5];

  return list.map((item, index) => (
    <Star
      id={index}
      rating={hoverState || rating}
      onMouseEnter={() => {
        setHoverState(index);
      }}
      onMouseLeave={() => setHoverState(0)}
      onClick={() => setRating(index)}
    />
  ));
};
