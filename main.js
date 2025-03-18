import { addToCart, displayCartTotal, renderCartItems } from "./js/cart.js";
import { fetchProducts, renderProducts } from "./js/products.js";

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("cart.html")) {
    renderCartItems();
    displayCartTotal();
  } else {
    //* Eğer sayfa cart.html sayfasında değilse ürünleri al.
    const products = await fetchProducts();
    //* Ürünleri render et ve addToCartCallBack fonksiyonu tanımla.
    renderProducts(products, (event) => addToCart(event,products))
  }
});
