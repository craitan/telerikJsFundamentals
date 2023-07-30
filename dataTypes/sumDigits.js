let input = [
    "2346",
    
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = gets()

let firstDigit = number.charAt(0)
let secondDigit = number.charAt(1)
let thirdDigit = number.charAt(2)
let fourthDigit = number.charAt(3)

let answer = Number(firstDigit) + Number(secondDigit) + Number(thirdDigit) + Number(fourthDigit)

console.log(answer)