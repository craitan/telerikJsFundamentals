let input = [
    "5",
    "3",
    
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let a = Number(gets());
let b = Number(gets());
let c = a

if(a > b){
    a = b
    b = c
}

console.log(`${a} ${b}`)