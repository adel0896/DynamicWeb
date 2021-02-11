const letters = "abcdefghijlmnpstuvw";

const letterArray = letters.split("");
letters[0];
letterArray.forEach(handleLetter);

function handleLetter(letter) {
  createNavLink(letter);
  createCategorySection(letter);
}
function createCategorySection(letter) {
  const template = document.querySelector("#sectiontemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = letter;
  copy.querySelector("section").id = `letter_${letter}`;
  const parent = document.querySelector(".categories");
  parent.appendChild(copy);
}
function createNavLink(letter) {
  //create nav link
  const temp = document.querySelector("#linktemplate").content;
  const copy = temp.cloneNode(true);
  copy.querySelector("a").textContent = letter;
  copy.querySelector("a").href = `#letter_${letter}`;
  document.querySelector(".letterlinks ol").appendChild(copy);
}

fetch("https://kea-alt-del.dk/t7/api/subcategories")
  .then((res) => res.json())
  .then(gotData);

function gotData(data) {
  data.forEach(showCategory);
}
function showCategory(category) {
  const template = document.querySelector("#linktemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = category.subcategory;
  copy.querySelector(
    "a"
  ).href = `productlist.html?subcategory=${category.subcategory}`;
  const firstLetter = category.subcategory[0].toLowerCase();
  const topParent = document.querySelector(`#letter_${firstLetter}`);
  const elemParent = topParent.querySelector("ol");
  elemParent.appendChild(copy);
}
