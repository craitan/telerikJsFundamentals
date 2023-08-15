let input = [
    "3",
    "2",
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let number = Number(gets());
let product = 1
let sum = 1

for (let i = 1; i <= n; i++){
    product *= i/number
    sum += product
}

console.log((sum).toFixed(5))