let input = [
    "-1",
    '-10',
    '0',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = Number(gets());
let num2 = Number(gets());
let num3 = Number(gets());

if (num1 > num2 && num1 > num3) {
    console.log(num1)
} else if (num2 > num1 && num2 > num3) {
    console.log(num2)
} else { console.log(num3) }