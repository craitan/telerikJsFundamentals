let input = ["3", "1", "2", "3"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
smallestNumber = -200;
for (let i = 1; i <= n; i++) {
    let currentNumber = Number(gets());
    if (currentNumber > smallestNumber){
        smallestNumber = currentNumber
    }
}

console.log(smallestNumber)