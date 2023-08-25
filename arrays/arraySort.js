let input = ['0,1,0,3,12'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = gets().split(',').map(Number);

let arrayZero = [];
let arrayNumbers = [];

for (num of numbers){
    if (num === 0){
        arrayZero.push(num);
    } else{
        arrayNumbers.push(num);
    }
}

let sortedArray = (arrayNumbers.concat(arrayZero)).join(',')

console.log(sortedArray)