let input = [
    "4",
    '4',
    '4',
    "4",
    "4",
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = Number(gets());
let num2 = Number(gets());
let num3 = Number(gets());
let num4 = Number(gets());
let num5 = Number(gets());

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log(num1)
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log(num2)
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    console.log(num3)
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    console.log(num4)
} else { console.log(num5) }