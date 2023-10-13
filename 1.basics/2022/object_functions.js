// object

let object = {
    name: "Vidusha Wijekoon",
    age: 33,
    canFly: false,
    languages: ['HTML', 'CSS', 'Javascript', 'PHP'],
    address: {
        city: 'Gampola',
        street: 'Mariyawaththe'
    }
}

// how to access object in JS
console.log({ object });
console.log(object.name);
console.log(object.languages[1]);
console.log(object.address.city);
console.log(object['languages'][2]);

// how to add element in js
object.class = 'Javascript Full Course';
console.log(object);
// update value in 
object.languages.push('Reactjs', 'Laravel');
console.log(object);

// functions using for reduce and repeating codes
// oldest
function oldFunc(num1, num2) {
    return num1 * num2;
}
// new Methods
const displayName = (name, age, language) => {
    console.log(`Your name is: ${name} and your ${age} and master in ${language}`);
}

// const displayName1 = (age, clz) => {
//     let name = prompt("What's your name?");
//     console.log(`your name is ${name} and age is ${age} and ${clz}`);
//     return (age + name);
// }

// const functionAssignToVariable = (name, age, clz) => {
//     console.log(`your name is ${name} and age is ${age} and ${clz}`);
//     return (age + name);
// }

displayName('Vidusha', 64, 'JavaScript');
// functionAssignToVariable('Razer', 23, "JS");
console.log(oldFunc(8, 2));

let functionAssignToVariable = (name) => {
    console.log(name)
}

let myAge = 35;

// one line function
const func1 = (name) => console.log(name);

// use without return 
const func2 = (name) => `my name is ${name}`;

functionAssignToVariable("adsdsadsd");
func1("asdasdasd");
console.log(func2('athapaththu wijekoon mudiyanselage vidusha wijekoon pulashthi jayasri bandara wijekoon'));

const newFun = (name) => {
    let ago = 20;
    return `Your name is ${name} and yeas ${ago}`
}

console.log(newFun("Vidusha"));