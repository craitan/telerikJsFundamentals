let input = ["12"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets())
let devisor = 2
while (devisor <= n) {
    if (n % devisor !== 0) {
        devisor++
    } else if (n % devisor === 0) {
        n = n / devisor
        console.log(devisor)
    }
}