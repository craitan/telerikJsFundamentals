let input = ['3,-12,0,0,13,5,1,0,-2'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(',').map(Number);

let sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
let avg = (sumOfNumbers / numbers.length).toFixed(2)

let bellowAvg = []
let aboveAvg = []

for (num of numbers) {
    if (num < avg) {
        bellowAvg.push(num)
    } else if (num > avg){
        aboveAvg.push(num)
    }

}
console.log(`avg: ${avg}`)
console.log(`below: ${bellowAvg.join(',')}`)
console.log(`above: ${aboveAvg.join(',')}`)
