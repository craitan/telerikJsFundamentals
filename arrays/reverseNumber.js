let input = ['256'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let strNumber = gets()
let splitNumber = strNumber.split("")
let newNumber = splitNumber.reverse()

console.log(newNumber.join(''))