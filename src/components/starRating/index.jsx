import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export const StarRating = ({ stars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //   const star = Array(stars);
  useEffect(function () {
    console.log(`hover: ${hover}`);
    console.log(`rating: ${rating}`);
  });
  function handleClick(i) {
    setRating(i);
  }
  function handleMouseOver(i) {
    setHover(i);
  }
  function handleMouseOut() {
    setHover(rating);
  }
  return (
    <div>
      {[...Array(stars)].map(function (_, index) {
        return (
          <FaStar
            size={40}
            className={index <= (hover || rating) ? "active" : ""}
            onClick={() => handleClick(index)}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          />
        );
      })}
    </div>
  );
};
