let input = [
    "1988",
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let year = Number(gets())

let answer = year % 12

switch(answer){
    case 8: console.log("Dragon"); break;
    case 9: console.log("Snake"); break;
    case 10: console.log("Horse"); break;
    case 11: console.log("Sheep"); break;
    case 0: console.log("Monkey"); break;
    case 1: console.log("Rooster"); break;
    case 2: console.log("Dog"); break;
    case 3: console.log("Pig"); break;
    case 4: console.log("Rat"); break;
    case 5: console.log("Ox"); break;
    case 6: console.log("Tiger"); break;
    case 7: console.log("Hare"); break;

}