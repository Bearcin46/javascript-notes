let products=[
    {
        id:1,
        title:"Android Phone",
        cost:7500
    },
 
    {
        id:3,
        title:"Headphone",
        cost:2500
    },
    {
        id:4,
        title:"Earbuds",
        cost:1500
    },
    {
        id:2,
        title:"Gaming Computer",
        cost:90500
    },
]
//sort it using lowest price
//sort it by title ascending
//filter products less than 8000
//map it like : //android phone-7500

let lowPrice= products.sort((a,b)=>{return a.cost- b.cost})
.sort((a,b)=>{
   if(a.title<b.title) return -1
   if(a.title>b.title) return 1
   return 1
})
.filter((val)=>{return val.cost < 8000})
.map((val)=>{ return `${val.title} - ${val.cost}`})
console.log(lowPrice)

console.log([] == ![]);