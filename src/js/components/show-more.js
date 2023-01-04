
const showMore = document.querySelector(".show-more");
const productsLength = document.querySelectorAll(".portfolio__item").length;
let items = 9;

showMore.addEventListener("click", () => {
  items += 6;
  const array = Array.from(
    document.querySelector(".portfolio__content").children
  );
  const visItems = array.slice(0, items);

  visItems.forEach((el) => el.classList.add("is-visible"));

  if (visItems.length === productsLength) {
    showMore.style.display = "none";
  }
});
