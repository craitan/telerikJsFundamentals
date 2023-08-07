let input = [
    "f",
    "3",

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let label = gets();
let number = Number(gets());

switch (label) {
    case "a": if (number % 2 !== 0) {
        console.log('dark')
    } else {
        console.log('light')
    }; break;
    case 'b': if (number % 2 !== 0) {
        console.log('light')
    } else {
        console.log('dark')
    }; break;
    case 'c': if (number % 2 !== 0) {
        console.log('dark')
    } else {
        console.log('light')
    }; break;
    case 'd': if (number % 2 !== 0) {
        console.log('light')
    } else {
        console.log('dark')
    }; break;
    case 'e': if (number % 2 !== 0) {
        console.log('dark')
    } else {
        console.log('light')
    }; break;
    case 'f': if (number % 2 !== 0) {
        console.log('light')
    } else {
        console.log('dark')
    }; break;
    case 'g': if (number % 2 !== 0) {
        console.log('dark')
    } else {
        console.log('light')
    }; break;
    case 'h': if (number % 2 !== 0) {
        console.log('light')
    } else {
        console.log('dark')
    }; break;
}
