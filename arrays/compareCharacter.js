let input = ['telerik', 'teleric'];
//let input = ['own', 'owed'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array1 = gets()
let array2 = gets()
let result = "";

for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
    if (array1[i] < array2[i]) {
        result = "first";
        break;
    } else if (array1[i] > array2[i]) {
        result = "second";
        break;
    }
}

if (result === "") {
    if (array1.length < array2.length) {
        result = "first";
    } else if (array1.length > array2.length) {
        result = "second";
    } else {
        result = "equal";
    }
}

console.log(result);