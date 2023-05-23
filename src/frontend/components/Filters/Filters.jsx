import React, { useContext } from "react";
import { categories } from "../../../backend/db/categories";
import { FilterContext } from "../../contexts/FilterContext";
export const Filters = () => {
  const { filterObj, dispatch } = useContext(FilterContext);
  return (
    <div className="filters">
      <div>
        <p>
          <b>Filters</b>
        </p>
        <button
        onClick={(e)=> dispatch({
            type: "clear"
            })}
             >Clear</button>
      </div>
      <div>
        <label htmlFor="">Price</label>
        <input type="range"
        max={999}
        min={50}
        onChange={(e)=> dispatch({
            type: "price",
            value: e.target.value ,
            })}
     />
      </div>
      <div>
        <p>
          <b>Categories</b>
        </p>
        {categories.map((category) => (
          <div key={category.id}>
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
            <label htmlFor={category.id}>{category.name}</label>
          </div>
        ))}
      </div>
      <div>
        <p>
          <b>Rating</b>
        </p>
        <input
         type="radio"
          name="rating"
          checked={filterObj.sortbyrating === 4}
        onChange={() => dispatch({ type: "sortbyrating", value: 4 })}
          
          />
        <label htmlFor="radio">4 Stars & above</label>
        <input 
        type="radio" 
        name="rating"
        checked={filterObj.sortbyrating === 3}
        onChange={() => dispatch({ type: "sortbyrating", value: 3 })}
        />
        <label htmlFor="radio">3 Stars & above</label>
        <input
         type="radio" 
         name="rating"
         checked={filterObj.sortbyrating === 2}
        onChange={() => dispatch({ type: "sortbyrating", value: 2})}
         
         />
        <label htmlFor="radio">2 Stars & above</label>
        <input 
        type="radio" 
        name="rating" 
        checked={filterObj.sortbyrating === 1}
        onChange={() => dispatch({ type: "sortbyrating", value: 1 })}
        
        />
        <label htmlFor="radio">1 Stars & above</label>
      </div>
      <div>
        <p>
          <b>Sort by Price</b>
        </p>
        <input
          checked={filterObj.sortby === "ltoh"}
          type="radio"
          value="ltoh"
          onChange={() => dispatch({ type: "sort", value: "ltoh" })}
          name="sortbyprice"
        />
        <label>Low to High</label>
        <input
          checked={filterObj.sortby === "htol"}
          type="radio"
          value="htol"
          onChange={() => dispatch({ type: "sort", value: "htol" })}
          name="sortbyprice"
        />

        <label>High to Low</label>
      </div>
    </div>
  );
};
