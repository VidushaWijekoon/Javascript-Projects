let stdMarks = []

for (let i = 0; i < 5; i++) {
    stdMarks.push(prompt(`Enter ${i+1} student Mark`));

}

// for (let i = 1; i < 5; i++) {
//     (stdMarks[i]) >= 50 ? console.log(`Student Mark ${i+1} is fail`) : (`Student mark ${i+1} is failed`);
// }

let stdNum = 0;

while (stdNum < 5) {
    if (stdMarks[stdNum] >= 50) {
        console.log(`Student ${stdNum+1} is pass`);
    } else {
        console.log(`Student ${stdNum+1} is fail`);
    }
    stdNum++;
}