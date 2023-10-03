// Traversing the DOM

var itemList = document.querySelector('#li-items');

// Parent Node
console.log(itemList.parentNode);
itemList.parentNode.style.background = 'gray';
console.log(itemList.parentNode.parentElement);

// parent Element
// mostly it's similar to parentNode
console.log(itemList.parentElement);
itemList.parentNode.style.background = 'red';
console.log(itemList.parentNode.parentElement);

// child Nodes
// return values with line break
console.log(itemList.childNodes);

// Childrens
console.log(itemList.children);
console.log(itemList.children[2].textContent);
itemList.children[2].style.color = "yellow";

// first child
// work like childnode
console.log(itemList.firstChild);

// first Element child
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.background = "blue";

// last child
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.background = "blue";

// sibling
// same level elements
console.log(itemList.nextSibling);

// next element sibling
console.log(itemList.nextElementSibling);
itemList.nextElementSibling.style.background = "darkblue";

//  Previous Sibling
console.log(itemList.previousSibling);
// previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.background = "darkblue";

// Create an Element
// --Create an Input--
let input = document.createElement('input');

// Add a Class
input.className = 'test';

// Add an ID
input.id = 'last';

// Add an attribute
input.setAttribute('type', 'text');
console.log(input);

// --Create a Div--
let newDiv = document.createElement('div');

// Create text node
let newText = document.createTextNode('How are you!');

// Add text to div
newDiv.appendChild(newText);
console.log(newDiv);

// ---Insert created elements to the document---
let form = document.querySelector('.frm form');
let button = document.querySelector('.frm form button');

input.style.height = '50px';

form.insertBefore(input, button);