let a = [12, 'amila', '3.5', 3.5, 'upul', 'colombo'];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// array method
// array destructuring
// foreach is need to use call back function access to the array function
// event, index, accessing full array
// in foreach the is no return value
// if you want return any value in use map()
console.log(a.forEach((e, index, arr) => {
    return (e, index, arr);
}));

// best way to access each individual array element
console.log(a.map((el, index) => {
    return [el, index];
}));

for (index in a) {
    console.log(a[index], index);
}

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

for (key in object) {
    console.log(key, object[key]);
}

// map only return array values
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = arr.map((el, index) => {
    return {
        val: el ** 2,
        index: index
    }
});
console.log(result);

let newObj = [{
        name: "Amila",
        age: 23,
        city: "Colombo"
    },
    {
        name: "Vidusha",
        age: 36,
        city: "Kandy"
    },
    {
        name: "Bandara",
        age: 22,
        city: "Gampola"
    },
    {
        name: "Harshani",
        age: 28,
        city: "Nawalapitiya"
    }
]

console.log(newObj);

//  array iteration
let arr1 = newObj.map((el, index) => ({
    name: el.name,
    age: el.age
}));

console.log(arr1);
let arryNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let showOdd = arryNum.filter((el) => el % 2 == 1);
console.log(showOdd);

// add all 6 to all the elementes
let myR = arr.filter((el) => el % 2 == 0).map((el) => el + 6);
console.log(myR);

let redarry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let myResult = redarry.reduce((pre, val) => {
    pre.push({
        eval: val + 5 * 3,
        oVal: val
    })
    return pre;
}, []);

console.log(myResult);

let myResult1 = redarry.reduce((pre, val, index) => {
    pre[`new objct ${index + 1}`] = {
        eval: val + 5 * 3,
        oVal: val
    }
    return pre;
}, {})
console.log(myResult1);