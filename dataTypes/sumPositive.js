let input = [
    "3",
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets())

let answer = number * (number + 1) / 2

console.log(answer)