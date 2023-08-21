let input = [3, 1, 3, 3, 1, 2, 3];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets())

let arrayOne = []
let arrayTwo = []

for (let i = 0; i < n; i++) {
    let currentNumber = gets()
    arrayOne.push(currentNumber)
}

for (let i = 0; i < n; i++) {
    let currentNumber = gets()
    arrayTwo.push(currentNumber)
}

let equal = true

for (let i = 0; i < n; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
        equal = false;
        break
    }
}

if (equal){
    console.log('equal')
} else {
    console.log('not equal')
}