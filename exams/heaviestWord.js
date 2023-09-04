let input = ["5", "telerik", "alpha", "java", "Spring", "nodeJS"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
const alphabet = "abcdefghijklmnopqrstuvwxyz";

let dict = {}

let winner = ''
let points = 0

for (let i = 0; i < n; i++) {
    let currentWord = gets();
    let sum = 0
    for (let j = 0; j < currentWord.length; j++) {
        let letter = currentWord[j].toLowerCase();
        let positionInAlphabet = alphabet.indexOf(letter) + 1;
        sum += positionInAlphabet;

    }
    dict[currentWord] = sum;
}


for (let word in dict) {
    if (dict[word] > points){
        winner = word;
        points = dict[word]
    }
}

console.log(`${points} ${winner}`)