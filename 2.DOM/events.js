// ---------------------
// -------Events--------
// ---------------------

/*
    An HTML event can be something the browser does, or something a user does.

    Here are some examples of HTML events:
    1. An HTML web page has finished loading
    2. An HTML input field was changed
    3. An HTML button was clicked

    Often, when events happen, you may want to do something.
    JavaScript lets you execute code when events are detected.
*/

// ---Using Internal Events---
// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
// <element event='some JavaScript'>

const btnClick = (event) => {
    alert(event);
}

// ---Using Event Listeners---
/*
    The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

    You can add many event handlers to one element.

    You can add many event handlers of the same type to one element, i.e two "click" events.

    You can add event listeners to any DOM object not only HTML elements. i.e the window object.

    When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

    You can easily remove an event listener by using the removeEventListener() method.
*/

// how to use eventlistener

let button1 = document.getElementById('c-btn').addEventListener('click', () => {
    alert('Button Clicked');
});

// --Named Function--
document.getElementById('c-btn').addEventListener('mouseout', txtChange);

function txtChange(){
    alert("Mouse out!");
    document.getElementById('hdt').textContent = 'Mouse Out!';
}

// Parameters
document.getElementById('i-btn').addEventListener('click', () => {
    changeListBack('Hello');
});

function changeListBack(event) {
    document.getElementById('body').style.backgroundColor = "#ebca14";
    document.getElementById('li-items').firstElementChild.textContent = event;
};

// event parameters
var button2 = document.getElementById('e-btn').addEventListener('click', clickBtn);


function clickBtn(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.classList);
    console.log(event.target.type);
    console.log(event.type);

    // output
    let output = document.getElementById('output');
    output.innerHTML = "<h4>classname: " + event.target.classList[0] + "</h4>"

    // clicking position
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.offsetX);
    console.log(event.offsetY);

    // check key press
    console.log(event.altKey);
    console.log(event.shiftKey);
    console.log(event.ctrlKey);

}

// --Bubbling & Capturing--
/*
    Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

    In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

    In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

    The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.
*/

// Bubbling

document.getElementById("myP1").addEventListener("click", function () {
    alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, false);

// Capturing
document.getElementById("myP2").addEventListener("click", function () {
    alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, true);

// Remove the event listeners
function myFunc(){
    alert("Button has clicked!");
}

// Add
document.getElementById('ev-btn').addEventListener('click', myFunc);

// Remove
document.getElementById('rm-btn').addEventListener('click', function(){
    document.getElementById('ev-btn').removeEventListener('click', myFunc);
    console.log("Event has removed!");
});


// --Different types of events for mouse--
let btn = document.getElementById('t-btn');
console.log(btn);
let box = document.getElementById('box');
console.log(box);

btn.addEventListener('click', typeOfEvent);
btn.addEventListener('dblclick', typeOfEvent);
btn.addEventListener('mousedown', typeOfEvent);
btn.addEventListener('mouseup', typeOfEvent);

box.addEventListener('mouseenter', typeOfEvent);
box.addEventListener('mouseleave', typeOfEvent);

box.addEventListener('mouseover', typeOfEvent);
box.addEventListener('mouseout', typeOfEvent);

box.addEventListener('mousemove', typeOfEvent);

function typeOfEvent(event){
    console.log("Event Type: " + event.type);

    document.querySelector('#box h2').textContent = 'Mouse X : ' + event.offsetX+' | Mouse Y : ' + event.offsetY;

    document.body.style.backgroundColor = 'rgb(' + event.offsetY + ', ' + event.offsetX + ',' + event.offsetX + ')';
}

// --Different types of events for keyboard--
let keyInput = document.querySelector('input[type="text"]');

keyInput.addEventListener('keydown', typeOfEvent2);
keyInput.addEventListener('keyup', typeOfEvent2);
keyInput.addEventListener('keypress', typeOfEvent2);

keyInput.addEventListener('focus', typeOfEvent2);
keyInput.addEventListener('blur', typeOfEvent2);

keyInput.addEventListener('copy', typeOfEvent2);
keyInput.addEventListener('cut', typeOfEvent2);
keyInput.addEventListener('paste', typeOfEvent2);

keyInput.addEventListener('input', typeOfEvent2);

function typeOfEvent2(e){
    console.log('Event type : '+e.type);
    // console.log('Value : '+e.target.value);
    // document.getElementById('out').textContent = e.target.value;
}


// --Other different types of events--
// Select
let select = document.querySelector('select');

// select.addEventListener('change', typeOfEvent3);
select.addEventListener('input', typeOfEvent3);

function typeOfEvent3(e){
    console.log('Event type : '+e.type);
    console.log('Value : '+e.target.value);
}

// Form
let form = document.querySelector('form');

form.addEventListener('submit', typeOfEvent4);

function typeOfEvent4(e){
    e.preventDefault();
    console.log('Event type : '+e.type);
}