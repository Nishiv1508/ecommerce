const baseURL = "https://dummyjson.com/";

let navbar = document.querySelector(".navbar");
let section = document.querySelector(".sec");
let pagination = document.querySelector(".pagination");
let results = document.querySelector(".results");
const pg = document.querySelectorAll(".pagination");
const container = document.createElement("div");
const container2 = document.createElement("div");
const container3 = document.createElement("div");
const container4 = document.createElement("div");
const container5 = document.createElement("div");
const productPage = document.createElement("div");
container2.style.display = "none";
container3.style.display = "none";
container4.style.display = "none";
container5.style.display = "none";
productPage.style.display = "none";

section.appendChild(container);
container.classList.add("container");

fetch(baseURL + "products")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
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
  })
  .then(() => {
    // const cards = document.querySelectorAll(".product-card");
    // cards.forEach((card) =>
    //   card.addEventListener("click", (e) => {
    //     let id = card.dataset.val;
    //     fetch(baseURL + "products/" + id)
    //       .then((data) => data.json())
    //       .then((data) => {
    //         console.log(data);
    //         let imageContainer = document.createElement("div");
    //         let dataContainer = document.createElement("div");
    //         let p_image = document.createElement("img");
    //         let p_title = document.createElement("p");
    //         let p_desc = document.createElement("p");
    //         let p_price = document.createElement("p");
    //         let p_stock = document.createElement("p");
    //         let p_rating = document.createElement("p");
    //         let p_warranty = document.createElement("p");

    //         container.style.display = "none";
    //         container2.style.display = "none";
    //         container3.style.display = "none";
    //         container4.style.display = "none";
    //         container5.style.display = "none";
    //         pagination.classList.add("hide");
    //         productPage.style.display = "flex";
    //         productPage.style.height = "80%";
    //         p_image.style.height = "500px";
    //         p_image.style.width = "500px";
    //         dataContainer.style.display = "flex";
    //         dataContainer.style.flexDirection = "column";
    //         dataContainer.style.gap = "20px";
    //         dataContainer.style.marginTop = "10%";

    //         p_image.setAttribute("src", data.thumbnail);
    //         p_title.textContent = data.title;
    //         p_desc.textContent = data.description;
    //         p_price.textContent = "Price: " + data.price;
    //         p_stock.textContent = "Stock: " + data.stock;
    //         p_rating.textContent = "Rating: " + data.rating;
    //         p_warranty.textContent = "Warranty: " + data.warrantyInformation;

    //         productPage.replaceChildren();
    //         section.appendChild(productPage);
    //         productPage.append(imageContainer);
    //         imageContainer.append(p_image);
    //         productPage.append(dataContainer);
    //         dataContainer.append(p_title);
    //         dataContainer.append(p_desc);
    //         dataContainer.append(p_price);
    //         dataContainer.append(p_stock);
    //         dataContainer.append(p_rating);
    //         dataContainer.append(p_warranty);
    //       });
    //   }),
    // );
    productPageFunc();
  });

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

//Home button
const home = document.querySelector(".home");
home.addEventListener("click", () => {
  container2.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  productPage.style.display = "none";
  pagination.classList.remove("hide");

  container.style.display = "flex";
  container.classList.add("container");
});

function productPageFunc() {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((card) =>
    card.addEventListener("click", (e) => {
      let id = card.dataset.val;
      fetch(baseURL + "products/" + id)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          let imageContainer = document.createElement("div");
          let dataContainer = document.createElement("div");
          let p_image = document.createElement("img");
          let p_title = document.createElement("p");
          let p_desc = document.createElement("p");
          let p_price = document.createElement("p");
          let p_stock = document.createElement("p");
          let p_rating = document.createElement("p");
          let p_warranty = document.createElement("p");

          container.style.display = "none";
          container2.style.display = "none";
          container3.style.display = "none";
          container4.style.display = "none";
          container5.style.display = "none";
          pagination.classList.add("hide");
          productPage.style.display = "flex";
          productPage.style.height = "80%";
          p_image.style.height = "500px";
          p_image.style.width = "500px";
          dataContainer.style.display = "flex";
          dataContainer.style.flexDirection = "column";
          dataContainer.style.gap = "20px";
          dataContainer.style.marginTop = "10%";

          p_image.setAttribute("src", data.thumbnail);
          p_title.textContent = data.title;
          p_desc.textContent = data.description;
          p_price.textContent = "Price: " + data.price;
          p_stock.textContent = "Stock: " + data.stock;
          p_rating.textContent = "Rating: " + data.rating;
          p_warranty.textContent = "Warranty: " + data.warrantyInformation;

          productPage.replaceChildren();
          section.appendChild(productPage);
          productPage.append(imageContainer);
          imageContainer.append(p_image);
          productPage.append(dataContainer);
          dataContainer.append(p_title);
          dataContainer.append(p_desc);
          dataContainer.append(p_price);
          dataContainer.append(p_stock);
          dataContainer.append(p_rating);
          dataContainer.append(p_warranty);
        });
    }),
  );
}
