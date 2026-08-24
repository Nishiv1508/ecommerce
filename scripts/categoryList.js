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
      container4.style.display = "none";
      container5.style.display = "none";
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

        cName.setAttribute("href", category.url);
        cName.textContent = category.name;
        cName.style.color = "white";

        container3.appendChild(categoryCard);
        categoryCard.append(cName);
      });
    });
});
