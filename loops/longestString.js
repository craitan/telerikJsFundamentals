let input = ["pizza", "macaroni", "kiufte", "banica", "END"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let foodLenth = 0
let longestFoodName = ''

while(true){
    let foodName = gets()

    if (foodName === "END"){
        break;
    }

    if (foodName.length >= foodLenth){
        foodLenth = foodName.length;
        longestFoodName = foodName;
    }
};

console.log(longestFoodName)