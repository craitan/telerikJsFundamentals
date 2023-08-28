let input = ['anagram', '6', 'gramana', 'aaagrnm', 'anagra', 'margana', 'abc', 'xy'];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let word = gets().split('').sort().join('');
let n = Number(gets());

let originalWord = {};

for (const letter of word) {
    if (letter in originalWord) {
        originalWord[letter]++;
    } else {
        originalWord[letter] = 1;
    }
}

for (let i = 0; i < n; i++) {
    let currentWord = gets().split('').sort().join('');
    let anagramWord = {};

    for (const letter of currentWord) {
        if (letter in anagramWord) {
            anagramWord[letter]++;
        } else {
            anagramWord[letter] = 1;
        }
    }

    let keys1 = Object.keys(originalWord);
    let keys2 = Object.keys(anagramWord);

    if (keys1.length !== keys2.length) {
        console.log('no');
    } else {
        let areAnagrams = true;
        for (const key of keys1) {
            if (originalWord[key] !== anagramWord[key]) {
                console.log('no');
                areAnagrams = false;
                break;
            }
        }
        if (areAnagrams) {
            console.log('yes');
        }
    }
}
