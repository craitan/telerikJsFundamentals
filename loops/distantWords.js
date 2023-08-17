let input = ["28", "3", "coffee", "tea", "pineapple"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let target = Number(gets());
let n = Number(gets());
let sumOfDistance = 0


for (let i = 0; i < n; i++) {
    let currentWord = gets();
    let sumOfChar = 0
    for (let char of currentWord) {
        sumOfChar += char.charCodeAt(0) - 96
    }
    
    let distance = sumOfChar - target
    sumOfDistance += Math.abs(distance)
    console.log(`${currentWord} ${Math.abs(distance)}`)

}

console.log((sumOfDistance / n).toFixed(2))