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
    image:"https://dis-prod.assetful.loblaw.ca/content/dam/loblaw-companies-limited/creative-assets/shoppers-drug-mart/sdm-phx/digital/web/projects/2022/p6/electronics/home/Hero%20Electronics.png"
  },
  {
    id: uuid(),
    name: "jewelery",
    image:"https://imgmedia.lbb.in/media/2022/09/632846916e5fb64e9bd02f1a_1663583889764.jpg"
  },
  {
    id: uuid(),
    name: "men's clothing",
    image:"https://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/EVERGREEN/CAT-TILES/AW23/Mens-Womens-UPDATED/FTC5003_AW23_Mens-Cat-Tiles/FTC5003_MensClothing_Tier2/MENS-Coats-Jackets_500x400.jpg?lastmodified=202304111412055"
      },
  {
    id: uuid(),
    name: "women's clothing",
    image:"https://www.periodlink.com/wp-content/uploads/2023/01/womens-clothes-204otq-1.jpg"
      }
];
