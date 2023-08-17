let input = ["asd"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let commnad = gets();

if (!isNaN(commnad)) {
    let number = parseFloat(commnad);
    let result = number + 1
    console.log(result)
} else {
    let reversedWord = commnad.split('').reverse().join("")
    console.log(reversedWord)
}
