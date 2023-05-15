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

  const quotee = document.createElement("div");
  quotee.textContent = "Tom";
  element.appendChild(quotee);

  // hours
  const hoursHeading = document.createElement("div");
  hoursHeading.textContent = "Hours";
  element.appendChild(hoursHeading);

  let hours = document.createElement("div");
  hours.textContent = "Weekdays: 8AM - 8PM";
  element.appendChild(hours);
  
  hours = document.createElement("div");
  hours.textContent = "Weekends: 9AM - 9PM";
  element.appendChild(hours);

  // location
  const locationHeading = document.createElement("div");
  locationHeading.textContent = "Location";
  element.appendChild(locationHeading);

  let location = document.createElement("div");
  location.textContent = "123 Wood Drive, Woodville, Foreston";
  element.appendChild(location);

  return element;
};

export default homePage;
