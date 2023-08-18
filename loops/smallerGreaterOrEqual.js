let input = ["3", "2", "5", "1"];
// let input = ["4", "-1", "4", "4", "4"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let previusNumber = "";
let comparisonString = '';

for (let i = 0; i <= n; i++) {
  let currentNumber = Number(gets());
  

  if (comparisonString.length < 1) {
    comparisonString += currentNumber.toString();
    previusNumber = currentNumber
  }

  if (currentNumber > previusNumber){
    comparisonString += "<" + currentNumber.toString();
  } else if (currentNumber < previusNumber){
    comparisonString += ">" + currentNumber.toString();
  } else if (currentNumber === previusNumber){
    comparisonString += "=" + currentNumber.toString();
  }

  previusNumber = currentNumber

}
console.log(comparisonString)