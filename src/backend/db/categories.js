import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * [
"electronics",
"jewelery",
"men's clothing",
"women's clothing"
]
 * */

export const categories = [
  {
    id: uuid(),
    name: "electronics",
  },
  {
    id: uuid(),
    name: "jewelery",
  },
  {
    id: uuid(),
    name: "men's clothing",
      },
  {
    id: uuid(),
    name: "women's clothing",
      }
];
