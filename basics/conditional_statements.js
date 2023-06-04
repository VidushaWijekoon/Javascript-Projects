let currentAge = 33;

if (currentAge > 18) {
    console.log('you can vote');
} else if (currentAge < 18) {
    console.log('you cannot vote');
}

//
(currentAge > 25) ? console.log('pass'): console.log('wrong');

// let marks = 65

(currentAge > 75) ? console.log('A'):
    (currentAge > 65) > console.log('B') ?
    (currentAge > 55) : console.log('c') ?
    (currentAge > 35) > console.log('S') :
    console.log('F');


// let enterYear = parseInt(prompt("Please enter to check year"));
// if (enterYear % 400 == 0) {
//     console.log('this is a leap year');
//     if (enterYear % 100 == 0) {
//         console.log('not a leap year');
//         if (enterYear % 4 == 0) {
//             console.log('this is a leap year');
//         }
//     }
// }

let month = 7;

switch (month) {
    case 1:
        {
            console.log("January")
        }
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("Invalid Month");
        break;
}
for (let i = 1; i < 12; i++) {
    console.log(`Number ${i}`);
    for (let j = 1; j < 13; j++) {
        console.log(`${i} * ${j} = `, i * j);
    }
}

for (let i = 0; i < myArray.length; i++) {
    console.log(i);
}

const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

staffsDetails.forEach(stuffDetail => {
    let sentence = `i'm ${stuffDetail.name} a staff of royal suites`;
    console.log(sentence);
})

let i = 1;
console.log(i);
console.log(++i);
console.log(--i);
console.log(i++);
console.log(i--);

let ii = 0
while (ii < 10) {
    console.log(ii);
    ii++;
}

do {
    console.log(ii);
    ii++
} while (ii < 10);