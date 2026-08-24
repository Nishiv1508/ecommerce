document.querySelector(".title-filter").addEventListener("click", async () => {
  container.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "none";
  container5.style.display = "none";
  productPage.style.display = "none";
  pagination.classList.remove("hide");
  container4.style.display = "flex";
  container4.style.flexWrap = "wrap";
  section.appendChild(container4);
  let val = document.querySelector(".title-filter").textContent;
  fetch(baseURL + "products?sortBy=title&order=asc")
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

        container4.append(productCard);
        productCard.append(pImage);
        productCard.append(pTitle);
        productCard.append(pPrice);
      });
    });
});

document.querySelector(".price-filter").addEventListener("click", async () => {
  container.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  pagination.classList.remove("hide");
  container5.style.display = "flex";
  container5.style.flexWrap = "wrap";
  section.appendChild(container5);
  let val = document.querySelector(".title-filter").textContent;
  fetch(baseURL + "products?sortBy=price&order=asc")
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

        container5.append(productCard);
        productCard.append(pImage);
        productCard.append(pTitle);
        productCard.append(pPrice);
      });
    });
});
