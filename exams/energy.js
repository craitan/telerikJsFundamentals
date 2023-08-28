let input = ["363"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split('').map(Number);
let evensSum = 0;
let oddSum = 0;
for (num of numbers) {
    if (num % 2 === 0) {
        evensSum += num;
    } else {
        oddSum += num;
    }
}
if (evensSum === oddSum) {
    console.log(`${evensSum} of both`)
} else if (evensSum > oddSum) {
    console.log(`${evensSum} energy drinks`)
} else if (evensSum < oddSum) {
    console.log(`${oddSum} cups of coffee`)
}