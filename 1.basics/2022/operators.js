/* 

+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

*/

let full_name = first_name + ' ' + last_name;
let something = "Vidusha Wijekoon"

let num1 = 5;
let num2 = 10;
let age = 33;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(3 / 6 * 6 + 3 - 56 - 2);
console.log(first_name + num1);

// converting automatically using unary operator
console.log(+bb + num1);

console.log(num1 += 10);
console.log(num1 -= 10);
console.log(num1 *= 10);
console.log(num1 /= 10);

console.log(`My name is ${first_name} ${last_name} and i'm ${age} years old!`)

// string index 
console.log(full_name[2]);
// get range of strings
console.log(full_name.substring(4, 9));
// split from space
console.log(full_name.split(' '));
// find last index in string
console.log(full_name.lastIndexOf(full_name));
// get certain character
console.log(full_name.charAt('12'));
// check ends
console.log(something.endsWith('Wijekoon'));
// replace name
console.log(something.replace('Vidusha', 'bandara'));