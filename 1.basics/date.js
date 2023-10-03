let today = new Date();
let today1 = new Date("June 12 2023 10:28");
let today2 = new Date(2023, 5, 1, 12, 12, 12);
console.log(today);
console.log(today1);
console.log(today2);

console.log(today.toDateString());
console.log(typeof(today.toDateString()));
console.log(today.toString());
console.log(today.toString().split(' '));

console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getYear());

console.log(today.getDate(), today.getMonth(), today.getFullYear(), today.getHours(), today.getMinutes(), today.setSeconds(), today.getDay());

console.log(today1.getUTCDate());
console.log(today1.getTime());