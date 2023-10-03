let minArr = (1, 2, 3, 4, 55, 66, 77, 100, 6, 90);

console.log(`Minimum`, Math.min(2, 3, 4, 55, 66, 77));
console.log(`Maximum Value`, Math.max(2, 3, 4, 55, 66, 77));
console.log(`Round Up`, Math.round(4.6));
console.log(`Round Up`, Math.round(4.5));
console.log(`Ceil`, Math.ceil(4.5));
console.log(`Floor of`, Math.floor(-4.5));
console.log(`Power of`, Math.pow(8, 2));
console.log(`Squar Root of 8`, Math.sqrt(64));
console.log(`Abs Value`, Math.abs(-4.7));
// console.log(`PI Value`, Math.PI(2));

// limit to two float in JS
let num = 125.1364549
console.log(`float tow digits`, num.toFixed(2));

// generate random numbers
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * (25 - 5)) + 5);