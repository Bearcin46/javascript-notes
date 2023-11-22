// const person={
//     name:"Anushya",
//     place:"Tuticorin",
//     greetUser(){
//         return `Hello My name is ${this.name} and I'm from ${this.place}`
//     }
// }
// // person.name="Bearcin"
// person.place="Malaysia"
// const person1=person.greetUser()
// document.write(person1)
// document.body.innerText=person1
// document.body.innerHTML=`<p>${person1}<p>`

//challenge to get name dynamically

// const input1=prompt("what is your Name?")
// //if you want  default value ("","brrzn")
// const input2=prompt("Where are you from?")
// person.name=input1
// person.place=input2
// const person1=person.greetUser()
// document.body.innerHTML=`<h1>${person1}<h1>`

const person={
    name:"Bearcin",
    place:"Malaysia",
    greet(){
        return `Hi, I'm ${this.name} and I'm from ${this.place}`
    }
    
}
let nameInput=prompt("What is your Name?")
let placeInput=prompt("Where are you from?")
person.name=nameInput
person.place=placeInput
let greetings=person.greet()
document.write(greetings)
// document.body.innerHTML=`<h1>${greetings}</h1>`

// document.body.innerText=greetings
// document.textContent=greetings