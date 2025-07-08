import React from "react";

const FilteredMovieList = ({ minRating, onRatingClick, ratings }) => {
  const selected =
    "py-1 px-1 whitespace-nowrap cursor-pointer border-b-2 border-b-gray-500";

  return (
    <ul className="flex items-center justify-center mr-2 gap-1">
      {ratings.map((rating) => (
        <li
          key={rating}
          className={
            minRating === rating
              ? selected
              : "py-1 px-1 whitespace-nowrap cursor-pointer"
          }
          onClick={() => onRatingClick(rating)}
        >
          {rating}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilteredMovieList;
