let input = [
    "-1",
    "0",
    "-20",

];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = Number(gets())
let num2 = Number(gets())
let num3 = Number(gets())

let answer = ''

if (num1 >= num2 && num1 >= num3) {
    answer += `${num1} `
    if (num2 >= num3) {
        answer += `${num2} ${num3}`
    } else { answer += `${num3} ${num2}` }
} else if (num2 >= num1 && num2 >= num3) {
    answer += `${num2} `
    if (num1 >= num3) {
        answer += `${num1} ${num3}`
    } else { answer += `${num3} ${num1}` }
} else if (num3 >= num1 && num3 >= num2) {
    answer += `${num3} `
    if (num1 >= num2) {
        answer += `${num1} ${num2}`
    } else { answer += `${num2} ${num1}` }
}

console.log(answer)