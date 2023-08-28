let input = ['185'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = gets().split('').map(Number)
let sumNum = 0
for (let i = 0; i < number.length; i++) {

}