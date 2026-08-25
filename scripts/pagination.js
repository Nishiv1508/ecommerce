pg.forEach((li) => {
  li.addEventListener("click", (e) => {
    li.classList.add("active");
    let pageAnchor = e.target;
    let pageNum = pageAnchor.textContent;
    fetch(baseURL + "products/?limit=30&skip=" + (pageNum - 1) * 30)
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
