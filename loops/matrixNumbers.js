let input = ["3"];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = i; j < i + n; j++) {
      row.push(j);
    }
    console.log(row.join(' '));
  }