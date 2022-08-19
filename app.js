/* app.js */
var imgLog = function () {
  console.log("You moused over Mega Man!");
};

document.addEventListener("DOMContentLoaded", function () {
  var img = document.querySelector("img");
  img.addEventListener("mouseover", imgLog);
});
