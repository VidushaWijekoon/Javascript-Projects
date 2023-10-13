// Type Conversion or Casting

let amount = "vidusha";

//// Convert String Change into the number
// amount = parseInt(amount);
// amount = +amount; Best Practice
// amount = Number(amount);

//// Convert Number Change into the string
// amount = amount.toString();
// amount = String(amount);

//// String Change into the Decimal
// amount = parseFloat(amount);

//// Convert Boolean to Number
// amount = Boolean(amount);

console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("foo" / 3);

console.log(amount, typeof amount);

// Type Coercion
let d;
d = 5 + "5";
d = 5 + +"5";
d = 5 + Number("5");
console.log(d, typeof d);
