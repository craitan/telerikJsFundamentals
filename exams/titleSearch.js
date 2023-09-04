let input = ["peshoishere", "3", "eho", "piere", "telerik"];
//let input = ["cfoadset", "2", "code", "slow"];
//let input = ["taeclaedreimky", "2", "telerik", "academy"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let word = gets();

let n = Number(gets());

let isFound = false

for (let i = 0; i < n; i++) {
    let currentWord = gets()
    for (let j = 0; j < currentWord.length; j++) {
        let charToRemove = currentWord[j];
        let indexToRemove = word.indexOf(charToRemove);
        isFound = false
        if (indexToRemove !== -1) {
            isFound = true
            word = word.replace(charToRemove,"")
        }

    }
    if (isFound) { 
        console.log(word) 
    } else {
        console.log(`No such title found!`)
    }

}

