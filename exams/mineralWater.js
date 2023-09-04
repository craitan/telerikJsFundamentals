let input = ["3", "1", "4"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0); AbortController

let smallBottle = Number(gets());

let bigBottle = Number(gets());

let truckCapacity = Number(gets());

let smallBottleLiters = smallBottle * 1;
let bigBottleLiters = bigBottle * 5;

let sumOfBottles = smallBottleLiters + bigBottleLiters;

if (sumOfBottles >= truckCapacity && truckCapacity >= bigBottleLiters) {
    
    truckCapacity = truckCapacity - (bigBottleLiters);
    let smallBottleNeeded = Math.min(truckCapacity, smallBottle);
    

    console.log(smallBottleNeeded);
} else { 
    console.log(-1);
};