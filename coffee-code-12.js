// Array Manipulation
// let is like var
let choices = ["Blue", "Green", "Orange", "Violet", "Indigo", "Yellow"];
let suffixes = ["th", "st", "nd", "rd"]

let result = choices.map(function(choice, index) {
  let suffix;
  switch(index) {
    case 0:
      // suffix should be st
      suffix = suffixes[1]
      break;
    case 1:
      // nd
      suffix = suffixes[2]
      break;
    case 2:
      // rd
      suffix = suffixes[3]
      break;
    default:
      // th
      suffix = suffixes[0]
  }
  return '${index + 1}${suffix} choice is ${choice}.'
});


document.body.innerHTML = result.join('<br>')
// result is an array



// for (var i = 1; i < choices.length; i++) {
//   switch(i) {
//     case 0:
//       // suffix should be st
//       break;
//     case 1:
//       // nd
//       break;
//     case 2:
//       // th
//       break;
//     default:
//   }
// }



// Current Date
// Today is:Friday. Current time is: 4 PM : 50 : 22

let date = new Date();



document.body.innerHTML = date.getDay();
