import homePage from "./homePage";
import shopPage from "./shopPage";
import contactPage from "./contactPage";

// function erase content div

// tab-switching featureaddEventListener click onto button
// delete contents and add new contents

const content = document.getElementById("content");

console.log("Hello world!");
content.appendChild(homePage());

