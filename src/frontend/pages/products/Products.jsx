import React, { useContext } from "react";
import { categories } from "../../../backend/db/categories";
import { Filters } from "../../components/Filters/Filters";
import { Header } from "../../components/Header/Header";
import { FilterContext } from "../../contexts/FilterContext";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import "./products.css";

export default function Products() {
  const {product} = useContext(ProductContext);
  const {filterObj} = useContext(FilterContext);

  const getFilteredData = ({ search, sortby, filters, sortbyrating,categories, price }) => {
    let filteredData = product;
    // console.log(filteredData,price)
    // console.log(price)
   
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
      :filteredData.filter(({rating:{rate}})=>
      rate >= sortbyrating);

      filteredData = !price
      ? filteredData
      :filteredData?.filter((products)=>
     price >= Number(products?.price));
  
        filteredData = !categories.length
        ? filteredData
        : filteredData.filter(({category})=>
        categories.includes(category));

      


  
    return filteredData;
  };


  const filteredData = getFilteredData(filterObj);

  return (
    <div>
      <Header/>
      <h2>Products</h2>
      <Filters />
      <ul className="layout">
        {filteredData?.map((producted) => {
          // const {
          //   id,
          //   title,
          //   description,
          //   price,
          //   category,
          //   image,
          //   count,
          //   rating: { rate },
          // } = product;
          return (
            <ProductCard 
              {...producted}/>
          );
        })}
      </ul>
    </div>
  );
}
