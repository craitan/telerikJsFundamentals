let input = ["3", "2", "5", "1"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let comparisonString = '';

for (let i = 1; i < n; i++) {
    if (input[i] < input[i + 1]) {
      comparisonString += input[i] + "<";
    } else if (input[i] > input[i + 1]) {
      comparisonString += input[i] + ">";
    } else {
      comparisonString += input[i] + "=";
    }
  }
  
  comparisonString += input[n - 1];
  
  console.log(comparisonString);