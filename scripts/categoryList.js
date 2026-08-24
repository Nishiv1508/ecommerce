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
      pagination.classList.add("hide");
      productPage.style.display = "none";
      container3.style.display = "flex";
      container3.style.flexWrap = "wrap";
      container3.style.gap = "10%";
      section.appendChild(container3);

      data.map((category) => {
        let categoryCard = document.createElement("div");
        let cName = document.createElement("a");

        categoryCard.classList.add("category-card");

        categoryCard.setAttribute("data-api", category.url);
        cName.textContent = category.name;
        cName.style.color = "white";

        container3.appendChild(categoryCard);
        categoryCard.append(cName);
      });
    })
    .then(() => {
      const cCards = document.querySelectorAll(".category-card");
      cCards.forEach((card) => {
        card.addEventListener("click", () => {
          fetch(card.dataset.api)
            .then((data) => data.json())
            .then((data) => {
              container2.style.display = "none";
              pagination.classList.add("hide");
              productPage.style.display = "none";
              container3.style.display = "none";
              container.style.display = "flex";
              container.classList.add("container");
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
            });
        });
      });
    });
});
