// Select and update dom element

// get the all the document elemenets
// console.dir(document);

// console.log(document.URL);
// console.log(document.characterSet);
// console.log(document.lastModified);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.all);
// console.log(document.all[11]);
// console.log(document.images);
// console.log(document.links);

// // change property values
// document.title = "I Been Change the document title";
// console.log(document.title);

// // not best practice to use all method
// document.all[11].textContent = 'Shopping Item List';
// console.log(document.all[11]);

// console.log("-------------------------------------");
// select element using id
let formTitle = document.getElementById('frmt');
// console.log(formTitle);
formTitle.textContent = 'Vidusha Wijekoon';
formTitle.innerText = 'Shoppig Items'
// console.log(formTitle.innerText);
formTitle.innerHTML = "<i>Effect With HTML Elemenets</i>";
console.log(formTitle.innerHTML);

// Styling

let navigation = document.getElementById('navbar');
navigation.style.backgroundColor = "#000000";
navigation.style.color = '#fff';

// Select element using classes
let items = document.getElementsByClassName('items');
console.log(items);
console.log(items[2]);
items[2].textContent = 'HandBag';
console.log(items[2].textContent);

items[2].style.fontFamily = 'italic';
items[2].style.backgroundColor = 'yellow';

// change all the list of items
for (let i of items) {
    i.style.backgroundColor = 'red';
    i.style.color = '#fff'
}

// select elements using tag name
let li = document.getElementsByTagName('li');
console.log(li);

li[1].textContent = 'Book';
console.log(li[1].textContent);
li[1].style.backgroundColor = 'blue';

// change all the colors
for (let j of li) {
    j.style.color = "black";
    j.style.backgroundColor = 'purple';
}

// -----------------------------------

// ---Select elements using Query selector---
// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

let hd = document.querySelector('#navbar');
hd.style.border = "2px solid green";

// get first input element in the js
let input1 = document.querySelector('input');
input1.style.backgroundColor = 'lightblue';
input1.value = "Paint Bucket";

let chooseItem = document.querySelector('.items');
chooseItem.style.backgroundColor = 'red';

let ite = document.querySelector('div .frm #frmt');
console.log(ite);
ite.style.backgroundColor = 'yellow';

// ---Select elements using Query selector all---
// The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.

let hdx = document.querySelectorAll('#hdt');
console.log(hdx);

let dv = document.querySelectorAll('div')
console.log(dv);

let cl = document.querySelectorAll('.items');
console.log(cl);

let mx = document.querySelectorAll('div .list li');
console.log(mx);

let odd = document.querySelectorAll('li:nth-child(odd)');
console.log(odd);
for (let k of odd) {
    k.style.backgroundColor = 'green';
}

let even = document.querySelectorAll('li:nth-child(even)');
console.log(even);
for (a of even) {
    a.style.backgroundColor = 'lightblue';
}