const baseURL = "https://dummyjson.com/";

let navbar = document.querySelector(".navbar");
const container = document.createElement("div");
const container2 = document.createElement("div");
const container3 = document.createElement("div");
container2.style.display = "none";
container3.style.display = "none";

navbar.after(container);
container.classList.add("container");

const product_card = {};

fetch(baseURL + "products")
  .then((data) => data.json())
  .then((data) => {
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
  });
//   .then(() => {
//     const cards = document.querySelectorAll(".product-card");
//     cards.map((card) => {
//       card.addEventListener("click", () => alert(Hello));
//     });
//   });

// const getAllProducts = async () => {
//   const products = await fetch(baseURL + "products");
//   const data = await products.json();
//   data.products.map((product) => {
//     let productCard = document.createElement("div");
//     let pImage = document.createElement("img");
//     let pTitle = document.createElement("p");
//     let pPrice = document.createElement("span");

//     productCard.classList.add("product-card");
//     productCard.setAttribute("data-val", product.id);

//     pImage.setAttribute("src", product.thumbnail);
//     pTitle.textContent = product.title;
//     pPrice.textContent = product.price;

//     container.appendChild(productCard);
//     productCard.append(pImage);
//     productCard.append(pTitle);
//     productCard.append(pPrice);

//     console.log(productCard.dataset.data);
//   });
// };
// getAllProducts();

//searching
const searchBox = document.querySelector(".form-control");
const sbtn = document.querySelector(".search-button");
sbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const products = await fetch(
    baseURL + "products/search?q=" + searchBox.value,
  );
  const data = await products.json();
  container.style.display = "none";
  container2.style.display = "flex";
  container2.style.flexWrap = "wrap";
  container2.style.gap = "10%";
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

//category list
const category = document.querySelector(".category");
category.addEventListener("click", async () => {
  //   const categories = await fetch(baseURL + "products/categories");
  //   const data = await categories.json();
  //   console.log(data);
  fetch(baseURL + "products/categories")
    .then((data) => data.json())
    .then((data) => {
      container.style.display = "none";
      container2.style.display = "none";
      container3.style.display = "flex";
      container3.style.flexWrap = "wrap";
      container3.style.gap = "10%";
      navbar.after(container3);

      data.map((category) => {
        let categoryCard = document.createElement("div");
        let cName = document.createElement("a");

        categoryCard.classList.add("category-card");

        cName.setAttribute("href", category.url);
        cName.textContent = category.name;
        cName.style.color = "white";

        container3.appendChild(categoryCard);
        categoryCard.append(cName);
      });
    });
});
