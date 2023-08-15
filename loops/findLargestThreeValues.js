let input = ["6", "-14", "-11", "-1", '-2', '-7', "-8"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

let largestNumber = -500;
let secondLargestNumber = -500;
let thirdLargestNumber = -500;

for (let i = 1; i <= n; i++) {
    let currentNumber = Number(gets())
    if (currentNumber >= largestNumber) {
        thirdLargestNumber = secondLargestNumber
        secondLargestNumber = largestNumber
        largestNumber = currentNumber
    } else if (currentNumber >= secondLargestNumber) {
        thirdLargestNumber = secondLargestNumber
        secondLargestNumber = currentNumber
    } else if (currentNumber >= thirdLargestNumber) {
        thirdLargestNumber = currentNumber
    }
}

console.log(`${largestNumber}, ${secondLargestNumber} and ${thirdLargestNumber}`)
