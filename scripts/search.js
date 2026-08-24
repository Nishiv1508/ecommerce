const searchBox = document.querySelector(".form-control");
const sbtn = document.querySelector(".search-button");

function handleChange(e) {
  results.replaceChildren();
  fetch(baseURL + "products/search?q=" + e.target.value + "&limit=5")
    .then((data) => data.json())
    .then((data) => data.products)
    .then((products) => {
      products.map((product) => {
        const liBox = document.createElement("p");
        liBox.classList.add("search-results");
        liBox.textContent = product.title;
        navbar.after(results);
        results.appendChild(liBox);
      });
    })
    .then(() => {
      let boxes = document.querySelectorAll(".search-results");
      boxes.forEach((box) => {
        box.addEventListener("click", () => {
          fetch(baseURL + "products/search?q=" + box.textContent)
            .then((data) => data.json())
            .then((data) => {
              container.style.display = "none";
              container3.style.display = "none";
              container4.style.display = "none";
              container5.style.display = "none";
              productPage.style.display = "none";
              pagination.classList.add("hide");
              container2.style.display = "flex";
              container2.style.flexWrap = "wrap";
              container2.style.gap = "10%";
              container2.classList.add("container");
              section.appendChild(container2);

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
            })
            .then(() => {
              //   const cards = document.querySelectorAll(".product-card");
              //   cards.forEach((card) =>
              //     card.addEventListener("click", (e) => {
              //       let id = card.dataset.val;
              //       fetch(baseURL + "products/" + id)
              //         .then((data) => data.json())
              //         .then((data) => {
              //           console.log(data);
              //           let imageContainer = document.createElement("div");
              //           let dataContainer = document.createElement("div");
              //           let p_image = document.createElement("img");
              //           let p_title = document.createElement("p");
              //           let p_desc = document.createElement("p");
              //           let p_price = document.createElement("p");
              //           let p_stock = document.createElement("p");
              //           let p_rating = document.createElement("p");
              //           let p_warranty = document.createElement("p");

              //           container.style.display = "none";
              //           container2.style.display = "none";
              //           container3.style.display = "none";
              //           container4.style.display = "none";
              //           container5.style.display = "none";
              //           pagination.classList.add("hide");
              //           productPage.style.display = "flex";
              //           productPage.style.height = "80%";
              //           p_image.style.height = "500px";
              //           p_image.style.width = "500px";
              //           dataContainer.style.display = "flex";
              //           dataContainer.style.flexDirection = "column";
              //           dataContainer.style.gap = "20px";
              //           dataContainer.style.marginTop = "10%";

              //           p_image.setAttribute("src", data.thumbnail);
              //           p_title.textContent = data.title;
              //           p_desc.textContent = data.description;
              //           p_price.textContent = "Price: " + data.price;
              //           p_stock.textContent = "Stock: " + data.stock;
              //           p_rating.textContent = "Rating: " + data.rating;
              //           p_warranty.textContent =
              //             "Warranty: " + data.warrantyInformation;

              //           productPage.replaceChildren();
              //           section.appendChild(productPage);
              //           productPage.append(imageContainer);
              //           imageContainer.append(p_image);
              //           productPage.append(dataContainer);
              //           dataContainer.append(p_title);
              //           dataContainer.append(p_desc);
              //           dataContainer.append(p_price);
              //           dataContainer.append(p_stock);
              //           dataContainer.append(p_rating);
              //           dataContainer.append(p_warranty);
              //         });
              //     }),
              //   );
              productPageFunc();
            });
        });
      });
    });
}

function debounce(handleChange, delay) {
  let timeout;
  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      handleChange.call(this, e);
    }, delay);
  };
}

const searchResult = debounce(handleChange, 1000);
searchBox.addEventListener("keypress", searchResult);

// searchBox.addEventListener("keypress", (e) => {
//   const res = debounce(handleChange, e.target.value, 1000);
//   res();
// });

section.addEventListener("click", () => {
  results.replaceChildren();
});

sbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const products = await fetch(
    baseURL + "products/search?q=" + searchBox.value,
  );
  const data = await products.json();
  container.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  productPage.style.display = "none";
  pagination.classList.add("hide");
  container2.style.display = "flex";
  container2.style.flexWrap = "wrap";
  container2.style.gap = "10%";
  container2.classList.add("container");
  section.appendChild(container2);

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

    productPageFunc();
  });
});
