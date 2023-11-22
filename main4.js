const array=[
    {
        id:1,
        name:"Sweety",
        country:"malaysia"
    },
    {
        id:2,
        name:"Sajid",
        country:"Srilanka"
    },
    {
        id:3,
        name:"Yogaraj",
        country:"India"
    },
    {
        id:4,
        name:"Akalya",
        country:"India"
    },
    {
        id:5,
        name:"Muthu Kumari",
        country:"India"
    },
]

const result=array.find((data)=>{
    return data.id===3
})
console.log(result.name)