let input = ["4", "pizza", "macaroni", "kiufte", "banica"];
//let input = ["4", "macaroni", "kiufte", "banica","aaaawwww"];
//let input = ["2", "bb", "www"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let countVowels = 0
let numberOfLetters = 0
let percentage = 100
let foodName = ''


for (let i = 0; i < n; i++) {
    let currentFood = gets();
    let currentFoodVowels = 0;
    let currentFoodLetters = 0;
    let currentPercentage = 0;

    for (let char of currentFood) {
        currentFoodLetters += 1;
        switch (char) {
            case 'a': currentFoodVowels += 1; break;
            case 'e': currentFoodVowels += 1; break;
            case 'i': currentFoodVowels += 1; break;
            case 'o': currentFoodVowels += 1; break;
            case 'u': currentFoodVowels += 1; break;
        }
    }

    currentPercentage = (currentFoodVowels / currentFoodLetters) * 100;

    if (currentPercentage < percentage) {
        percentage = currentPercentage;
        foodName = currentFood;
        countVowels = currentFoodVowels
        numberOfLetters = currentFoodLetters
    } else if (currentPercentage === percentage) {
        if (currentFoodVowels > countVowels) {
            percentage = currentPercentage;
            foodName = currentFood;
            countVowels = currentFoodVowels
            numberOfLetters = currentFoodLetters
        } else if (currentFoodVowels === countVowels) {
            if (currentFoodLetters > numberOfLetters) {
                percentage = currentPercentage;
                foodName = currentFood;
                countVowels = currentFoodVowels
                numberOfLetters = currentFoodLetters
            }
        }
    }
    currentFoodVowels = 0;
    currentFoodLetters = 0;
}

console.log(`${foodName} ${countVowels}/${numberOfLetters}`)
