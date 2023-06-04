let a = 4;
let s = a;
console.log(a);
console.log(s);
a = +5;
console.log(a, s);

let arr = ['amila', 'upul', 'kumara', 26, true]
console.log(arr);
// es6 array desctructoring
let [fname, mname, lname, age] = arr;
console.log(fname);
console.log(lname);
console.log(age);

let numArry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numArry1 = [...numArry];
console.log(`old number array`, numArry1);
numArry.push(10, 11);
console.log(`new array`, numArry);

age = 33;
console.log(age);

// Object Destructoring

let ojb = {
    name: "Vidusha Wijekoon",
    age: 34,
    address: {
        address1: '52/a',
        address2: 'Maryawaththe',
        address3: 'Gampola'
    }
}

const { name, address: { address2, address1 } } = ojb;
console.log(name);
console.log(address2);
console.log(address1);

let newObj = {...ojb }
console.log(`Object Values:`, ojb);
console.log(`Object Values:`, newObj);

ojb.city = 'Kandy'
console.log(`Object Values:`, ojb);
console.log(`Object Values:`, newObj);

let newObj1 = {
    ...ojb,
    a() {
        console.log(`im function`);
    },
    printYourName(lname) {
        console.log(lname);
    },
    sa: function() {
        console.log(`hi`);
    }
}

console.log(newObj1);