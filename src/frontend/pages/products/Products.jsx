import React, { useContext } from "react";
import { Filters } from "../../components/Filters/Filters";
import { FilterContext } from "../../contexts/FilterContext";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import "./products.css";

export default function Products() {
  const { product } = useContext(ProductContext);
  const { filterObj } = useContext(FilterContext);

  const getFilteredData = ({
    search,
    sortby,
    filters,
    sortbyrating,
    categories,
    price,
  }) => {
    let filteredData = product;

    filteredData = !search.length
      ? filteredData
      : filteredData.filter(({ title }) =>
          title.toLowerCase().includes(search.toLowerCase())
        );
    filteredData = !sortby.length
      ? filteredData
      : filteredData.sort((a, b) =>
          sortby === "htol" ? b.price - a.price : a.price - b.price
        );
    filteredData = !sortbyrating
      ? filteredData
      : filteredData.filter(({ rating: { rate } }) => rate >= sortbyrating);

    filteredData = !price
      ? filteredData
      : filteredData?.filter((products) => price >= Number(products?.price));

    filteredData = !categories.length
      ? filteredData
      : filteredData.filter(({ category }) => categories.includes(category));

    return filteredData;
  };

  const filteredData = getFilteredData(filterObj);

  return (
    <div>
      <h2 className="product-heading">Products</h2>
      <div className="container">
        <div className="filter-container">
        <Filters />
        </div>
        <div className="layout">
        {filteredData?.map((productes) => ( <ProductCard {...productes} />)
        )}
        </div>
      


      </div>
     
    </div>
  );
}
