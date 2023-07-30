let input = [
    "4",
    "3",
    "11",
    "40"
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let days = Number(gets())
let hours = Number(gets())
let minutes = Number(gets())
let seconds = Number(gets())

let answer = days * 86400 + hours * 3600 + minutes * 60 + seconds

console.log(answer)