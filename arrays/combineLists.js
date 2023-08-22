let input = ['2,3,1', '5,2,3'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);



let array1 = gets().split(',');
let array2 = gets().split(',');

let comboArray = [];


for (let i = 0; i < array1.length; i++) {
    comboArray.push(array1[i], array2[i]);
}

console.log(comboArray.join(","));