// String we can you inside duble quote "" or single quoate '' 
const first_name = "Vidusha";
const last_name = "Wijekoon";
let aaa = "12.3425"
let bb = 23;
let cc = true;
let dd = 234n; // BigInteger
let ee; // undefined
let ff = null; // this is set by the developer

// Unary Operator
let ua = -2;
let uaa = +2;
// Binary Operators
let ab = 2 + 3;

console.log(bb, cc, dd, ee, ff);
// how to find the type in datatype
// console.log(typeof (aa));
console.log(typeof (bb));
console.log(typeof (cc));
console.log(typeof (dd));
console.log(typeof (ee));
console.log(typeof (ff));

// type convertion
// cannot string convert into number
bb = String(bb);
cc = String(cc);
dd = String(dd);
console.log(typeof (bb));
console.log(typeof (cc));
console.log(dd);

console.log(Number(ff));
console.log(parseInt(ff));
console.log(parseInt(bb));
console.log(parseInt(aaa));
console.log(parseFloat(aaa));



