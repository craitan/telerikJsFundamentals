let input = [
    "2",
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let card = gets();

switch (card) {
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
    case "J":
    case "Q":
    case "K":
    case "A": console.log('yes'); break;
    default: console.log('no'); break
}