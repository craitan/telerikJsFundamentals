let input = ["3", "2", "5", "1"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let previusNumber = 0;
let comparisonString = '';

for (let i = 1; i <= n; i++) {
  let currentNumber = Numbver(gets());

  if (comparisonString.length < 1) {
    comparisonString += currentNumber.toString();
  }


}
console.log(comparisonString)