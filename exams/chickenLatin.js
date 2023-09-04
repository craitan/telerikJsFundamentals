//let input = ["Welcome to Chepelare"];
let input = ["He is no spring chicken anymore"];


let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let words = gets().split(" ");

let answer = "";

for (word of words) {
    let firstLetter = word[0];
    let wordLength = word.length;
    let modyfiedWord = word;

    switch (firstLetter.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u": {
            modyfiedWord = word.substring(1) + word[0] + "che";
        }; break;
        default: modyfiedWord = word + "che";
    }

    if (wordLength % 2 === 0) {
        modyfiedWord = modyfiedWord + "e";
    }
    answer += modyfiedWord + " ";
}

console.log(answer)