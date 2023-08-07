let input = [
    "4",
    
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let humanYears = Number(gets());
let humanYearsOver = 0;
let dogYears = 0;

if (humanYears > 2){
    humanYearsOver += humanYears - 2
};

if (humanYears <= 2){
    dogYears += humanYears * 10
} else{
    dogYears += 2 * 10
    dogYears += humanYearsOver * 4
}

console.log(dogYears)
