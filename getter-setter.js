let student={
    firstName:"Bearcin", //data properties
    lastName:"Sweety",
    fullName:function(){
        return (`Student Full Name is ${this.firstName} ${this.lastName}`)
    }
}
console.log(student.fullName())

//use arrow
let student1={
    firstName:"Bearcin",
    lastName:"Sweety",
    fullName:()=>{
        return (`Student1 Full Name is ${student1.firstName} ${student1.lastName}`)
    }
}
console.log(student1.fullName()) //this doesnt workin arrow and also normal method

//how arrow works in this case1: normal variable
let student2={
    firstName:"Bearcin",
    lastName:"Sweety",
    fullName:()=>{
        let firstName="abc";
        let lastName="xyz"
        return (`Student2 Full Name is ${firstName} ${lastName}`)
    }
}
console.log(student2.fullName())

//how arrow function works in object inside the function

let student3={
    firstName:"Bearcin",
    lastName:"Sweety",
    fullName:()=>{
        let name= {firstName:"abc",
         lastName:"xyz"}
        return (`Student3 Full Name is ${name.firstName} ${name.lastName}`)
    }
}
console.log(student3.fullName())



//GETTER $ SETTER
//it gets the name and display it
let student5={
    firstName:"Bearcin",
    lastName:"Sweety",
    get fullName(){
        return (`Student5 Full Name is ${student1.firstName} ${student1.lastName}`)//assessor properties
    }
}
console.log(student5.fullName)

//now if you want to modify the name to other , then  set is used
let student6={
    firstName:"Bearcin",
    lastName:"Sweety",
    get fullName(){
        return (`Student6 Full Name is ${student6.firstName} ${student6.lastName}`)
    },

    set fullName(value){
        // console.log(value)
        let name=value.split(" "); //it creates a array with two names
        // console.log(name)
        this.firstName=name[0];
        // console.log(this.firstName)
        this.lastName=name[1];

    }
}

//change name to Virat Kohli
student6.fullName="Virat Kohli"//it doesnt change initially

console.log(student6.fullName)

//changed , what if the set value has no last name

let student7={
    firstName:"Bearcin",
    lastName:"Sweety",
    get fullName(){
        return (`Full name is ${this.firstName} ${this.lastName}`)
    },
    set fullName(value){
        let newOne=value.split(" ");
        this.firstName=newOne[0];
        this.lastName =newOne[1] ?? "";

    }
}

student7.fullName="Inba"
console.log(student7.fullName)




