let input = [
    "0.76",
    "1",
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const price = Number(gets());
const amountPaid = Number(gets());

let change = Math.round((amountPaid - price) * 100);

let oneLev = 0;
let fiftyStotinki = 0;
let twentyStotinki = 0;
let tenStotinki = 0;
let fiveStotinki = 0;
let twoStotinki = 0;
let oneStotinka = 0;

while (change > 0) {
    if (change >= 100) {
        oneLev = Math.floor(change / 100);
        change %= 100;
    }
    if (change >= 50) {
        fiftyStotinki = Math.floor(change / 50);
        change %= 50;
    }
    if (change >= 20) {
        twentyStotinki = Math.floor(change / 20);
        change %= 20;
    }
    if (change >= 10) {
        tenStotinki = Math.floor(change / 10);
        change %= 10;
    }
    if (change >= 5) {
        fiveStotinki = Math.floor(change / 5);
        change %= 5;
    }
    if (change >= 2) {
        twoStotinki = Math.floor(change / 2);
        change %= 2;
    }
    if (change === 1) {
        oneStotinka = 1;
        break;
    }
}

if (oneLev > 0) {
    console.log(`${oneLev} x 1 lev`);
}
if (fiftyStotinki > 0) {
    console.log(`${fiftyStotinki} x 50 stotinki`);
}
if (twentyStotinki > 0) {
    console.log(`${twentyStotinki} x 20 stotinki`);
}
if (tenStotinki > 0) {
    console.log(`${tenStotinki} x 10 stotinki`);
}
if (fiveStotinki > 0) {
    console.log(`${fiveStotinki} x 5 stotinki`);
}
if (twoStotinki > 0) {
    console.log(`${twoStotinki} x 2 stotinki`);
}
if (oneStotinka > 0) {
    console.log(`${oneStotinka} x 1 stotinka`);
}