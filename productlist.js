const url = "https://kea-alt-del.dk/t7/api/products";
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });
function handleProductList(data) {
  data.forEach(showProduct);
}
function showProduct(product) {
  const template = document.querySelector("#productTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".subtle").textContent = product.brandname;
  copy.querySelector(".price").textContent = "Price:DKK" + product.price;
  copy.querySelector("h3").textContent = product.productdisplayname;
  //   copy.querySelector("img").src=product.im to be added

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
    copy.querySelector("button a").remove();
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onsale");
    copy.querySelector(".price").textContent = "Old price:" + product.price;
    copy.querySelector(".per").textContent = product.discount + "%";
    copy.querySelector(".newprice").textContent = `New Price:DKK ${
      product.price - [(product.price * product.discount) / 100]
    }`;
  }
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
