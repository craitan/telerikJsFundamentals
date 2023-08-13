let input = [
    "12:00 PM",
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let text = gets();

let splitText = text.split(":");
let hours = parseInt(splitText[0]);
let minutes = parseInt(splitText[1].split(" ")[0]);
let amPm = splitText[1].split(" ")[1];



if (isNaN(hours) || hours > 12 || minutes > 59 || (amPm !== "AM" && amPm !== "PM")) {
    console.log("invalid time");
  } else if ((hours >= 3 && hours < 12 && amPm === "AM") || (hours === 12 && amPm === "PM")) {
    console.log("non-beer time");
  } else {
    console.log("beer time");
  }