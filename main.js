const car={
    color:"red",
    name:"Maruthi",
    year:2000,
    "do you like this" :true
}
delete car.year
car.year=2002
console.log(car)
console.log(car["do you like this"])

//get each and every element by iterating
for(key in car){
    console.log(`i love ${car[key]}`)
}


//adding dynamic key and value
let property="first name"
let name="Bearcin Sweety"
const fullname={
    [property]:name
}
console.log(fullname)


//output based question
let base={
    a:"added",
    b:"multiplied",
    a:"divided"
}
console.log(base.a)
console.log(base)//first value will be replaced by new value but still holds on its first place


//multiply number by 2
let given={
    first:100,
    second:400,
    title:"final output",
}
function mulitplyByTwo(obj){
for(key in obj){
   if(typeof(obj[key]) === "number") {obj[key]*=2 } 
   else {obj[key]= `thats the output`}
 
}
}
mulitplyByTwo(given)
console.log(given)


//for-of

// let given2={
//     first:100,
//     second:400,
//     title:"final output",
// }
// function mulitplyByTo(obj){
// for(value of obj){
// //    if(typeof(obj[key]) === "number") {obj[key]*=2 } 
// //    else {obj[key]= `thats the output`}
// console.log(key)
 
// }
// }
// mulitplyByTo(given2)
// console.log(given2)
//lesson learnt here is for-of cant be used in object only for array, it gives the value of key


//for of in array
let counting=[1,111,1111,11113,111111,222,2233,4421]
for(val of counting){
console.log(val*=2)
}