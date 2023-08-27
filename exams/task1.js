let input = ['10'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets())

const primeNumbers = [];
for (let i = 1; i <= number; i++) {
    let isPrime = true;
    if (i > 1) {
        for (let divisor = 2; divisor <= Math.sqrt(i); divisor++) {
            if (i % divisor === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        primeNumbers.push(i);
    }
}

for (const primeNumber of primeNumbers) {
    let row = "";
    for (let j = 1; j <= primeNumber; j++) {
        let asd = '';
        if(primeNumbers.includes(j)){
            asd = "1";
        }else {
            asd = '0';
        }
        row += asd;
    }
    console.log(row.trim());
}