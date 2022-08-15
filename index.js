var newArticle = document.createElement('article');

console.log(newArticle);
// <article></article>
console.log(newArticle.parentNode);
// null
console.log(newArticle.innerHTML);
newArticle.innerHTML = "I'm an article about the awesomeness of the DOM!"

document.body.appendChild(newArticle);

document.body.insertBefore(newArticle, document.body.children[0]);

var secondArticle = newArticle.cloneNode(true);
document.body.appendChild(secondArticle);

document.body.removeChild(secondArticle);

document.body.appendChild(document.createElement('footer'));
document.body.removeChild(document.body.children[document.body.children.length - 1]);

document.body.appendChild(secondArticle);
secondArticle.parentNode.removeChild(secondArticle);

var updatedArticle = document.createElement('article');
updatedArticle.innerHTML = "This article is slightly less enthusiastic about the DOM but still speaks about its versatility and necessity.";

newArticle.parentNode.replaceChild(updatedArticle, newArticle);