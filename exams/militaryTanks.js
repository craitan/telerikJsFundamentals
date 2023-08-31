let input = ['DU'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let commands = gets()

let up = 0
let down = 0
let left = 0
let right = 0

let horizontalPosition = 0
let verticalPosition = 0

for (let command of commands) {
    let currentCommand = command
    if (currentCommand === "U") {
        verticalPosition++
    } else if (currentCommand === "D") {
        verticalPosition--
    } else if (currentCommand === "L") {
        horizontalPosition--
    } else if (currentCommand === "R") {
        horizontalPosition++
    }

}

console.log(`(${horizontalPosition}, ${verticalPosition})`);