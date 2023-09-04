let input = ["111", "222", "333", "444", "555"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let answer = ""
for (let i = 0; i < 5; i++) {
    let currentNum = gets()
    let sum = 1
    for (let num of currentNum) {
        sum *= Number(num)
    }

    let sumStr = sum.toString()

    if (sumStr.length >= 2) {
        answer += sumStr[sumStr.length - 1]
    } else {
        answer += sumStr
    }

}

console.log(answer)