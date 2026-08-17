const baseURL = "https://dummyjson.com/";

let navbar = document.querySelector(".navbar");
const container = document.createElement("div");
navbar.after(container);
container.classList.add("container");

const product_card = {};

const getAllProducts = async () => {
  const products = await fetch(baseURL + "products");
  const data = await products.json();
  data.products.map((product) => {
    let productCard = document.createElement("div");
    let pImage = document.createElement("img");
    let pTitle = document.createElement("p");
    let pPrice = document.createElement("span");

    productCard.classList.add("product-card");

    pImage.setAttribute("src", product.thumbnail);
    pTitle.textContent = product.title;
    pPrice.textContent = product.price;

    container.appendChild(productCard);
    productCard.append(pImage);
    productCard.append(pTitle);
    productCard.append(pPrice);
  });
};
getAllProducts();
