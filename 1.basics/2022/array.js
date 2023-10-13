let myArray = ['Amila', 12, 2.4, ['Red', 7, 'Black']];
console.log(myArray);
console.log(myArray[1]);
console.log(myArray[3][2]);
console.log(myArray.indexOf('Red'));
console.log(myArray.indexOf('Amila'));
console.log(myArray.indexOf(12));

// Reverse Array
console.log(myArray.reverse());
// Array Concat
let secondArray = ("Amila Upul Kumara").split(' ');
console.log(myArray.concat(secondArray));

// replace element in array
myArray[1] = 'AUK';
console.log(myArray);

// add array element in array starting
myArray.unshift('First Array');
console.log(myArray);
// add array element in array end
myArray.push("KCK");
console.log(myArray);

// remove first array element in array
myArray.shift()
console.log(myArray);
// remove last array element in array
myArray.pop()
console.log(myArray);
