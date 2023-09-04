let input = ["4", "5", "1", "3", "5"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let targets = Number(gets());

let georgiSpeed = Number(gets());
let georgiLatency = Number(gets());

let petarSpeed = Number(gets());
let petarLatency = Number(gets());

let georgiScore = (targets * georgiSpeed) + (georgiLatency * 2);

let petarScore = (targets * petarSpeed) + (petarLatency * 2);

if (georgiScore < petarScore) {
    console.log("George");
} else if (georgiScore > petarScore) {
    console.log("Peter");
} else if (georgiScore === petarScore) {
    console.log('Draw')
}