const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

const searchBtn = document.getElementById("search-btn");
const searchForm = document.getElementById("search-form");

const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");

/* MENU */

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

/* SEARCH */

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");

  cart.classList.remove("active");
};

/* CART */

cartBtn.onclick = () => {
  cart.classList.toggle("active");

  searchForm.classList.remove("active");
};
