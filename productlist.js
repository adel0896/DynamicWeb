const urlParams = new URLSearchParams(window.location.search);
const subcategory = urlParams.get("subcategory");
document.querySelector("main h2").textContent = subcategory;

const url = "https://kea-alt-del.dk/t7/api/products?subcategory=" + subcategory;

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
  console.log(
    "I am" + product.productdisplayname + "and I have id:" + product.id
  );
  const template = document.querySelector("#productTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".subtle").textContent = product.brandname;
  copy.querySelector(".price").textContent = "Price:DKK" + product.price;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("button a").href = `product.html?id=${product.id}`;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
    copy.querySelector("button a").remove();
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onsale");
    copy.querySelector(".price").textContent = "Old price:DKK " + product.price;
    copy.querySelector(".per").textContent = product.discount + "%";
    copy.querySelector(".newprice").textContent =
      "New Price:DKK" +
      Math.round(product.price - [(product.price * product.discount) / 100]);
    product.price - [(product.price * product.discount) / 100];
  }
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
