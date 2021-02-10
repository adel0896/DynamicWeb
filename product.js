const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .shirts").textContent =
    product.subcategory;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;
  document.querySelector(
    "img.productImg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img.productImg").alt = product.productdisplayname;
  document.querySelector(".purchasebox .name").textContent =
    product.productdisplayname;
  document.querySelector(".purchasebox .brand").textContent = product.brandname;
  document.querySelector(".purchasebox p span").textContent = product.price;
  document.querySelector(".info .name").textContent =
    product.productdisplayname;
  document.querySelector(".info .type").textContent = product.articletype;
  document.querySelector(".info .season").textContent = product.season;
  document.querySelector(".info .style").textContent = product.usagetype;
  document.querySelector(".info .branddescription").textContent =
    product.brandbio;
}
