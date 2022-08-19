// var newArticle = document.createElement('article');

// console.log(newArticle);
// // <article></article>
// console.log(newArticle.parentNode);
// // null
// console.log(newArticle.innerHTML);
// newArticle.innerHTML = "I'm an article about the awesomeness of the DOM!"

// document.body.appendChild(newArticle);

// document.body.insertBefore(newArticle, document.body.children[0]);

// var secondArticle = newArticle.cloneNode(true);
// document.body.appendChild(secondArticle);

// document.body.removeChild(secondArticle);

// document.body.appendChild(document.createElement('footer'));
// document.body.removeChild(document.body.children[document.body.children.length - 1]);

// document.body.appendChild(secondArticle);
// secondArticle.parentNode.removeChild(secondArticle);

// var updatedArticle = document.createElement('article');
// updatedArticle.innerHTML = "This article is slightly less enthusiastic about the DOM but still speaks about its versatility and necessity.";

// newArticle.parentNode.replaceChild(updatedArticle, newArticle);


// window.addEventListener("click", function () {
//   alert("You clicked on the page!");
// });

// var button = document.querySelector("button");
// var clickCount = 0;

// function onClick() {
//     clickCount += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }

// var clickAlert = function () {
//   alert("SOMEONE CLICKED THE BUTTON!!");
// };

// button.addEventListener("click", clickAlert);
// button.addEventListener("click", onClick);

// var logText = function (event) {
//   console.log(event.target.textContent);
// };

// window.addEventListener("click", logText);

// var div = document.querySelector("div");

// var logText = function (event) {
//   console.log(event.target.textContent);
// };

// div.addEventListener("click", logText);

// var paragraphs = document.querySelectorAll("p");

// var eventHandler = function () {
//   console.log("Woof!");
// };
// for (var i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].addEventListener("click", eventHandler);
// }

// var container = document.getElementById("container");

// var eventHandler = function () {
//   console.log("Woof!");
// };
// container.addEventListener("click", eventHandler);

var body = document.querySelector("body");
var button = document.querySelector("button");

body.addEventListener(
  "click",
  function () {
    alert("YOU CLICKED ON THE BODY!!!!");
  },
  true
);

button.addEventListener("click", function () {
  alert("YOU'RE REALLY PUSHING MY BUTTONS!!!!!");
});