const addbtn = document.querySelector(".add-product");

addbtn.addEventListener("click", () => {
  container.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "none";
  productPage.style.display = "none";
  productForm.style.display = "block";
  pagination.classList.add("hide");
  const form = document.createElement("form");
  const title = document.createElement("input");
  const desc = document.createElement("input");
  const image = document.createElement("input");
  const price = document.createElement("input");
  const stock = document.createElement("input");
  const submit = document.createElement("input");

  productForm.replaceChildren();
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("required", "");
  title.setAttribute("placeholder", "Enter Product Name");
  desc.setAttribute("type", "text");
  desc.setAttribute("name", "description");
  desc.setAttribute("required", "");
  desc.setAttribute("placeholder", "Enter Product Description");
  image.setAttribute("type", "file");
  image.setAttribute("name", "thumbnail");
  image.setAttribute("required", "");
  price.setAttribute("type", "number");
  price.setAttribute("name", "price");
  price.setAttribute("required", "");
  price.setAttribute("placeholder", "Enter Product Price");
  stock.setAttribute("type", "number");
  stock.setAttribute("name", "stock");
  stock.setAttribute("required", "");
  stock.setAttribute("placeholder", "Enter Product Stock");
  submit.setAttribute("type", "submit");

  form.classList.add("product-form");
  title.classList.add("input-ele");
  desc.classList.add("input-ele");
  price.classList.add("input-ele");
  stock.classList.add("input-ele");
  submit.classList.add("input-ele");

  section.appendChild(productForm);
  productForm.appendChild(form);
  form.appendChild(title);
  form.appendChild(desc);
  form.appendChild(image);
  form.appendChild(price);
  form.appendChild(stock);
  form.appendChild(submit);

  form.onsubmit = (e) => {
    e.preventDefault();
    const obj = {
      title: title.value,
      description: desc.value,
      thumbnail: image,
      price: price.value,
      stock: stock.value,
    };

    let formData = new FormData();
    formData.append("title", title.value);
    formData.append("description", desc.value);
    formData.append("thumbnail", image);
    formData.append("price", price.value);
    formData.append("stock", stock.value);

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      //   headers: { "Content-Type": "application/json" },
      // body: new FormData(formData),
      body: formData,
      // body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) {
          alert("Something went wrong");
          return;
        }
        return res.json();
      })
      .then((data) => alert("Product Created | id: " + data.id))
      .catch((err) => console.log(err));
  };
});
