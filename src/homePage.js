const homePage = () => {
  const element = document.createElement("div");

  // shop title
  const title = document.createElement("div");
  title.textContent = "The Cabin";
  title.classList.add("center");

  element.appendChild(title);

  // customer review
  const review = document.createElement("div");
  review.textContent =
    "The Cabin has the highest quality tree saplings! The Cabin's tree installation service was fast and easy!";
  element.appendChild(review);

  // hours

  // location

  // attach to element
  // element.appendChild();

  return element;
};

export default homePage;
