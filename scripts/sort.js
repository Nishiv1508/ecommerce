function getDataByOrder(filter, type) {
  container.style.display = "flex";
  container.classList.add("container");
  container2.style.display = "none";
  container3.style.display = "none";
  productPage.style.display = "none";
  productForm.style.display = "none";
  pagination.classList.remove("hide");
  container.replaceChildren();
  fetch(baseURL + `products?sortBy=${filter}&order=${type}`)
    .then((res) => {
      if (!res.ok) {
        alert("Something went wrong");
        return;
      }
      return res.json();
    })
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
      pg.forEach((li) => {
        li.addEventListener("click", (e) => {
          li.classList.add("active");
          let pageAnchor = e.target;
          let pageNum = pageAnchor.textContent;
          fetch(
            baseURL +
              `products/?sortBy=${filter}&order=${type}&limit=30&skip=` +
              (pageNum - 1) * 30,
          )
            .then((res) => {
              if (!res.ok) {
                alert("Something went wrong");
                return;
              }
              return res.json();
            })
            .then((data) => {
              container.replaceChildren();
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
              productPageFunc();
            })
            .catch((err) => console.log(err));
        });
      });
    })
    .then(() => {
      productPageFunc();
    })
    .catch((err) => console.log(err));
}

document.querySelector(".title-asc").addEventListener("click", () => {
  getDataByOrder("title", "asc");
});

document.querySelector(".price-asc").addEventListener("click", () => {
  getDataByOrder("price", "asc");
});

document.querySelector(".price-desc").addEventListener("click", () => {
  getDataByOrder("price", "desc");
});

document.querySelector(".title-desc").addEventListener("click", () => {
  getDataByOrder("title", "desc");
});

document.querySelector(".rating-asc").addEventListener("click", () => {
  getDataByOrder("rating", "asc");
});

document.querySelector(".rating-desc").addEventListener("click", () => {
  getDataByOrder("rating", "desc");
});
