import "./style.scss";
import homePage from "./homePage";
import shopPage from "./shopPage";
import contactPage from "./contactPage";
import Icon from "./backgroundImage.jpg"

// function erase content div

// tab-switching featureaddEventListener click onto button
// delete contents and add new contents

const element = document.createElement("div");
element.setAttribute("id", "content");
document.body.appendChild(element);

const content = document.getElementById("content");
// content.appendChild(homePage());
// content.appendChild(shopPage());
content.appendChild(contactPage());

console.log("Hello world!");
