let input = [
    "-1",
    '5',
    '-1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = Number(gets());
let num2 = Number(gets());
let num3 = Number(gets());


if (num1 === 0 || num2 === 0 || num3 === 0) {
    console.log('0');
} else if ((num1 > 0 && num2 > 0 && num3 > 0) ||
    (num1 < 0 && num2 < 0 && num3 > 0) ||
    (num1 < 0 && num2 > 0 && num3 < 0) ||
    (num1 > 0 && num2 < 0 && num3 < 0)) {
    console.log('+')
} else {
    console.log('-');
}