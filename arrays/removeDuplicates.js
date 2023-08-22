let input = ["c,c,a,b,a,a,b,c"];


let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(',')

let uniqueArray = [...new Set(array)];

console.log(uniqueArray.join(','));