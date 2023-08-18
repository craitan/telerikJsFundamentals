let input = ["5"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let waveOfNumbers = ""

for (let i = 1; i <= n; i++) {
    waveOfNumbers += i + " "
}

for (let i = n - 1; i > 0; i--) {
    waveOfNumbers += i + " "
}

console.log(waveOfNumbers)