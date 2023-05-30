import React, { useContext } from "react";
import { categories } from "../../../backend/db/categories";
import { FilterContext } from "../../contexts/FilterContext";
import "./filter.css"
export const Filters = () => {
  const { filterObj, dispatch } = useContext(FilterContext);
  return (
    <div className="filters">
      <div>
        <p className="filter-main-heading">
          <b>Filters</b>
        </p>
        <button
          onClick={(e) =>
            dispatch({
              type: "clear",
            })
          }
        >
          Clear
        </button>
      </div>
      <div className="filter-range">
        <label htmlFor="range" className="filter-range-label label"> <b>Price</b></label>
        <input
        className="filter-range-input"
          type="range"
          max={5000}
          min={700}
          onChange={(e) =>
            dispatch({
              type: "price",
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="filter-category">
        <p className="filter-heading">
          <b>Categories</b>
        </p>
        {categories.map((category) => (
          <div className="filter-category" key={category.id}>
            <input
              type="checkbox"
              id={category.id}
              name={category.name}
              value={category.id}

              checked={filterObj.categories.includes(category.name)}
              onChange={(e) => {
                if (e.target.checked) {
                  dispatch({
                    type: "ADD_CATEGORY",
                    value: category.name,
                  });
                } else {
                  dispatch({
                    type: "REMOVE_CATEGORY",
                    value: category.name,
                  });
                }
              }}
            />
            <label  className="filter-category-label label" htmlFor={category.id}>{category.name}</label>
          </div>
        ))}
      </div>
      <div className="filter-rating">
        <p className="filter-heading">
          <b>Rating</b>
        </p>
      <div className="filter-rating">
        <input
          type="radio"
          name="rating"
          checked={filterObj.sortbyrating === 4}
          onChange={() => dispatch({ type: "sortbyrating", value: 4 })}
        />
        <label htmlFor="radio" className="label">4 Stars</label>
        </div>
      <div className="filter-rating">
        <input
          type="radio"
          name="rating"
          checked={filterObj.sortbyrating === 3}
          onChange={() => dispatch({ type: "sortbyrating", value: 3 })}
        />
        <label htmlFor="radio" className="label">3 Stars</label>
        </div>
      <div className="filter-rating">
        <input
          type="radio"
          name="rating"
          checked={filterObj.sortbyrating === 2}
          onChange={() => dispatch({ type: "sortbyrating", value: 2 })}
        />
        <label htmlFor="radio" className="label">2 Stars </label>
        </div>
        <div className="filter-rating">
        <input
          type="radio"
          name="rating"
          checked={filterObj.sortbyrating === 1}
          onChange={() => dispatch({ type: "sortbyrating", value: 1 })}
        />
        <label htmlFor="radio" className="label">1 Stars</label>
        </div>
      </div>
      <div className="filter-price">
        <p className="filter-heading">
          <b>Sort by Price</b>
        </p>
      <div className="filter-price">
        <input
          checked={filterObj.sortby === "ltoh"}
          type="radio"
          value="ltoh"
          onChange={() => dispatch({ type: "sort", value: "ltoh" })}
          name="sortbyprice"
        />
        <label className="label">Low to High</label>
        </div>
      <div className="filter-price">
        <input
          checked={filterObj.sortby === "htol"}
          type="radio"
          value="htol"
          onChange={() => dispatch({ type: "sort", value: "htol" })}
          name="sortbyprice"
        />
        <label className="label">High to Low</label>
        </div>
      </div>
    </div>
  );
};
