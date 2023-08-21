let input = ["6", "1", "go", "1", "1", "there", "IT"];
//let input = ["9","try", "google", "it", "2", "plus", "2", "=", "52", "-10"];
//let input = ["3", "1", "1", "7",];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let stringWords = "";
let numberSum = 0;

for (let i = 1; i <= n; i++) {
    let input = gets();

    if (!isNaN(input)) {
        if (stringWords !== "") {
            console.log(stringWords.slice(0, -1));
            stringWords = "";
        }
        numberSum += parseInt(input);
    } else {
        if (numberSum !== 0) {
            console.log(numberSum);
            numberSum = 0
        }
        stringWords += input + "-"
    }
}

if (stringWords.length > 0) {
    console.log(stringWords.slice(0, -1));
} else if (numberSum !== 0) {
    console.log(numberSum);
}