//let input = ["5", "1", "go", "1", "there", "5",];
let input = ["3", "go", "there", "asd",];
//let input = ["3", "1", "1", "5",];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let stringWords = "";
let numberSum = 0;

for (let i = 1; i <= n; i++) {
    let input = gets();

    if (!isNaN(input)) {
        numberSum += parseInt(input);
    } else {
        stringWords += input + "-";
    }
}

if (stringWords.length < 1) {
    console.log('no words')
} else {
    console.log(stringWords.slice(0, -1))
}
console.log(numberSum)