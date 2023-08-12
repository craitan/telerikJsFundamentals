let input = [
    "22",
    "44",

];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let messages = Number(gets())
let minutes = Number(gets())

let freeMinutes = 60
let freeMessages = 20
let minuteCost = 0.10
let messageCost = 0.06

let additionalMessages = 0
let additionalMinutes = 0

if (minutes > freeMinutes){
    additionalMinutes += minutes - freeMinutes
}

if (messages > freeMessages){
    additionalMessages += messages - freeMessages
}

let additionalMessagesPrice = additionalMessages * messageCost
let additionalMinutesPrice = additionalMinutes * minuteCost
let tax = (additionalMessagesPrice + additionalMinutesPrice) * 0.2

let totalBill = 12 + additionalMessagesPrice + additionalMinutesPrice + tax

console.log(`${additionalMessages} additional messages for ${additionalMessagesPrice.toFixed(2)} levas`)
console.log(`${additionalMinutes} additional minutes for ${additionalMinutesPrice.toFixed(2)} levas`)
console.log(`${tax.toFixed(2)} additional taxes`)
console.log(`${totalBill.toFixed(2)} total bill`)