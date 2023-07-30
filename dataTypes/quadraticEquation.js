let input = [
    "2",
    "5",
    "-3"
    
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets())
let b = Number(gets())
let c = Number(gets())

let discriminant = b * b - 4 * a * c

let sqrtDiscriminant = Math.sqrt(discriminant)

let x1 = (-b - sqrtDiscriminant) / (2 * a)
let x2 = (-b + sqrtDiscriminant) / (2 * a)

console.log(`x1=${x1.toFixed(1)}`)
console.log(`x2=${x2.toFixed(1)}`)