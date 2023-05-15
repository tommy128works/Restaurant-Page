const homePage = () => {
  const element = document.createElement("div");

  // shop title
  let div = document.createElement("div");
  div.textContent = "The Cabin";
  div.classList.add("center", "wood");
  element.appendChild(div);

  // customer review
  div = document.createElement("div");
  div.textContent =
    "The Cabin has the highest quality tree saplings! The Cabin's tree installation service was fast and easy!";
  div.classList.add("center");
  element.appendChild(div);

  div = document.createElement("div");
  div.textContent = "Tom";
  div.classList.add("left");
  element.appendChild(div);

  // hours
  div = document.createElement("div");
  div.textContent = "Hours";
  element.appendChild(div);

  div = document.createElement("div");
  div.textContent = "Weekdays: 8AM - 8PM";
  div.classList.add("center");
  element.appendChild(div);

  div = document.createElement("div");
  div.textContent = "Weekends: 9AM - 9PM";
  div.classList.add("center");
  element.appendChild(div);

  // location
  div = document.createElement("div");
  div.textContent = "Location";
  element.appendChild(div);

  div = document.createElement("div");
  div.textContent = "123 Wood Drive, Woodville, Foreston";
  div.classList.add("center");
  element.appendChild(div);

  return element;
};

export default homePage;
