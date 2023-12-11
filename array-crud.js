const user=[
    {
        id:1,
        name:"Bearcin Sweety",
        role:"Junior Full-Stack Engineer",
        joiningDate(){
            let date=new Date()
            let today=date.toLocaleDateString()
            return today
        }
    },
    {
        id:2,
        name:"Lirisha",
        role:"Junior Full-Stack Engineer",
        joiningDate(){
            let date=new Date()
            let today=date.toLocaleDateString()
            return today
        }
    },
    {
        id:3,
        name:"Gradlin Monica",
        role:"Junior Full-Stack Engineer",
        joiningDate(){
            let date=new Date()
            let today=date.toLocaleDateString()
            return today
        }
    },
    {
        id:4,
        name:"Shalmi Lanza",
        role:"Java Full-Stack Engineer",
        joiningDate(){
            let date=new Date()
            let today=date.toLocaleDateString()
            return today
        }
    },
    {
        id:5,
        name:"Jeyashree",
        role:"Junior Full-Stack Engineer",
        joiningDate(){
            let date=new Date()
            let today=date.toLocaleDateString()
            return today
        }
    },
]

//Manipulating the dom
const givenName= document.getElementById("enterName");
const submitBtn=document.getElementById("submit")
const mainDiv=document.getElementById("main")



submitBtn.addEventListener("click",()=>{
    let input =givenName.value ;
    adding(input)
})
function adding(input){
    console.log(input)
    let newArr=user.find((val)=>{
        return val.name === input
     })

    //name
    const heading=document.getElementById("mainheading")
    heading.textContent=`Name: ${newArr.name}`
    //role
    const role=document.getElementById("role")
    role.textContent=`Role: ${newArr.role}`
    //joiningdate
    const date=document.getElementById("date")
    date.textContent=`Joining Date: ${newArr.joiningDate()}`
    
}



//remove
// user.shift()

// console.log(user)

//update
// user[0].id=8;
// console.log(user)

//delete
// delete user[1].joiningDate
// console.log(user)

//create
// user[1].age = "21";
// console.log(user)






















// submitBtn.addEventListener("click",()=>{   //even after finding the value it goes in loop and check all others
//     let input=givenName.value;
//     //using for of loop
//     for(data of user){
//         if(data.name===input){
//             console.log("Hey user is found");
//         }
//     }
// })
     //create image tag
    //  const image=document.createElement("img")
    //  image.src= newArr.img;
    //  mainDiv.prepend(image);