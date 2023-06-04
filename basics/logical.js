/*

==	equal to
===	equal value and equal type
!=	not equal	
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to	
<=	less than or equal to	
 
*/

let numa = 5,
    numb = '6';

console.log(`${numa} > ${numb}`, numa > numb);
console.log(`${numa} >= ${numb}`, numa >= numb);
console.log(`${numa} < ${numb}`, numa < numb);
console.log(`${numa} <= ${numb}`, numa <= numb);
console.log(`${numa} == ${numb}`, numa == numb);
console.log(`${numa} != ${numb}`, numa != numb);
console.log(`${numa} === ${numb}`, numa === numb);
console.log(`${numa} !== ${numb}`, numa !== numb);

/*

AND -> &&
OR ||
NOT !

*/

console.log((2 > 4) && (5 < 6));
console.log((2 > 4) || (5 < 6));
console.log(!(2 > 4));