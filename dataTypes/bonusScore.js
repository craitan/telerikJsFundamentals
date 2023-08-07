let input = [
    "44",
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let score = Number(gets())

if (score >= 1 && score <= 3){
    console.log(score * 10)
} else if(score >= 4 && score <= 6){
    console.log(score * 100)
} else if(score >= 7 && score <= 9){
    console.log(score * 1000)
}else {console.log('invalid score')}
