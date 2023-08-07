let input = [
    "March",
    "20",

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let month = gets();
let date = Number(gets());

//January, February, march, April, May, June, July, August, September, October, November and December

if (month === "January" || month === 'February') {
    console.log('Winter')
} else if (month === 'March') {
    if (date < 20) {
        console.log('Winter')
    } else { console.log('Spring') }
} else if (month === "April") {
    console.log('Spring')
} else if (month === "June") {
    if (date < 21) {
        console.log('Spring')
    } else { console.log('Summer') }
} else if (month === "July" || month === "August") {
    console.log('Summer')
} else if (month === "September") {
    if (date < 22) {
        console.log('Summer')
    } else { console.log('Autumn') }
} else if (month === "October" || month === "November") {
    console.log('Autumn')
} else if (month === "December") {
    if (date < 21) {
        console.log('Autumn')
    } else { console.log('Winter') }
}