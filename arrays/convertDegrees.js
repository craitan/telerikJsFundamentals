let input = ['0 15 30'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let splitInput = gets().split(' ')

for (let i = 0; i < splitInput.length; i++) {
    let celsius = Number(splitInput[i])
    let fahrenheit = Math.round(celsius * 9 / 5) + 32;
    console.log(fahrenheit)
}
