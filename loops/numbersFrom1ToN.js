let input = [
    "5",
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets());
let answer = ''
for (let i = 1; i <= number; i++){
    answer += (`${i} `)
}

console.log(answer)