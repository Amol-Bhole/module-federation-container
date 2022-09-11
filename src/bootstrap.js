import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartsMount } from "cart/CartsIndex";

import getGlobalContext from "./utils/globalContext";

const containersGlobalContext = getGlobalContext();

console.log("Mounted Container !!!!!");
productsMount(
  document.querySelector("#my-products-container"),
  containersGlobalContext
);
cartsMount(
  document.querySelector("#my-cart-container"),
  containersGlobalContext
);
