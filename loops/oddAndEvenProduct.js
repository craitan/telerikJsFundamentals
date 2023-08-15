let input = ["5", "2", "1", "1", "6", "3"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let odd = 1
let even = 1
let sumOfEven = 0
let sumOfOdd = 0
for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
        sumOfEven += Number(input[i]) * even
    } else { sumOfOdd += Number(input[i]) * odd }

}
// if (even === odd) {
//     console.log(`yes ${odd}`)
// } else { console.log(`no ${odd} ${even}`) }
console.log(sumOfEven)
console.log(sumOfOdd)
// console.log(odd)
// console.log(even)