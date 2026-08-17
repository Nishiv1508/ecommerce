const baseURL = "https://dummyjson.com/";

let navbar = document.querySelector(".navbar");
const container = document.createElement("div");
const container2 = document.createElement("div");
container2.style.display = "none";

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
    productCard.setAttribute("data-val", product.id);

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

//searching
const searchBox = document.querySelector(".form-control");
const sbtn = document.querySelector(".search-button");
sbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const products = await fetch(
    baseURL + "products/search?q=" + searchBox.value,
  );
  const data = await products.json();
  console.log(data);
  container.style.display = "none";
  container2.style.display = "flex";
  container2.style.flexWrap = "wrap";
  container2.style.gap = "10px";
  container2.classList.add("container");
  navbar.after(container2);

  data.products.map((product) => {
    let productCard = document.createElement("div");
    let pImage = document.createElement("img");
    let pTitle = document.createElement("p");
    let pPrice = document.createElement("span");

    productCard.classList.add("product-card");
    productCard.setAttribute("data-val", product.id);

    pImage.setAttribute("src", product.thumbnail);
    pTitle.textContent = product.title;
    pPrice.textContent = product.price;

    container2.appendChild(productCard);
    productCard.append(pImage);
    productCard.append(pTitle);
    productCard.append(pPrice);
  });
});
