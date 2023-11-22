//traditionally using ifelse
// const student={
//     firstName:"Bearcin",
//     lastName:"Sweety",
//     get fullName(){
//         return (`Student Full Name is ${this.firstName} ${this.lastName}`)
//     },
//     set fullName(value){
//         if(typeof(value != String)){
//             return
//         }
//         let givenName=value.split(" ")//it accepts only strings
//         this.firstName=givenName[0];
//         this.lastName=givenName[1] ?? ""
//     }

// }

// student.fullName=1
// console.log(student.fullName)



//newone try,catch,throw
const student={
    firstName:"Bearcin",
    lastName:"Sweety",
    get fullName(){
        return (`Student Full Name is ${this.firstName} ${this.lastName}`)
    },
    set fullName(value){
        if(typeof(value) != "string"){
            let mistake=new Error("Only strings are accepted")
            throw mistake
        }
        if(value.length <= 3){
            let mistake="Enter a valid Name"
            throw mistake
        }
        let givenName=value.split(" ")//it accepts only strings
        this.firstName=givenName[0];
        this.lastName=givenName[1] ?? ""
    }

}

try{student.fullName= "Swe"}
catch(err){
    alert(err)
}
console.log(student.fullName)


