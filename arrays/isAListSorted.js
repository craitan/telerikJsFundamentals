let input = ['3', '1,2,3,4,5', '1,2,8,9,9', '1,2,4,2,3'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());


for (let i = 0; i < n; i++) {
    let numbers = gets().split(',').map(Number);
    let isSorted = true
    for (let j = 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[j - 1]){
            isSorted = false;
            break;
        }
    }

    console.log(isSorted)
}