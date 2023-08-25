let input = ['4', '1 2 3 2 1', '2 1', '1 2 2 1', '4'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets())
let result = ''

for (let i = 0; i < n; i++) {
    let numbers = gets().split(' ').map(Number);
    if (numbers.length === 1) {
        result+= "Yes" + "\n";
        break;
    } else if (numbers.length % 2 !== 0) {
        let midIndex = Math.floor(numbers.length / 2);
        let firsHalf = numbers.slice(0, midIndex);
        let secondHalf = numbers.slice(midIndex + 1, numbers[-1]);
        let reversedSecondHalf = secondHalf.reverse((a, b) => b - a);

        if (firsHalf.join() === reversedSecondHalf.join()) {
            result+= "Yes" + "\n";
        } else {
            result+= "No" + "\n";
        }
    } else if (numbers.length % 2 === 0) {
        let index = numbers.length / 2
        let firsHalf = numbers.slice(0, index)
        let secondHalf = numbers.slice(index, numbers[-1])
        let reversedSecondHalf = secondHalf.reverse((a, b) => b - a);

        if (firsHalf.join() === reversedSecondHalf.join()) {
            result+= "Yes" + "\n";
        } else {
            result+= "No" + "\n";
        }
    }
}

console.log(result)