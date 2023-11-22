// let day="Wednesday"
// switch(day){
//     case 'Monday':
//         console.log("Wake up at 4 AM");
//         break;
//     case 'Tuesday':
//     case 'Wednesday':
//     case 'Thursday':
//     case 'Friday':
//         console.log("Wake up at 5 AM");
//         break;
//     case 'Saturday':
//         console.log("Wake up at 8 AM");
//         break;
//     case 'Sunday':
//         console.log("Wake up at 10 AM");
//         break;
//     default:
//         console.log("Sorry your input is invalid!");
// }

let date=new Date()
console.log(date)
let year=date.getFullYear()
console.log(year)
let month=date.getMonth()
console.log(month)
let localdate=date.toLocaleDateString()
console.log(localdate)
let day=date.getDay()
console.log(day)
let utcday=date.getUTCDay()
console.log(utcday)
let offset=date.getTimezoneOffset()
console.log(offset)
let localtime=date.toLocaleTimeString()
console.log(localtime)

//if tou use number then switch(true)
//case mark >6