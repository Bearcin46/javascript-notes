//passing para
function defa(qty,cost,item){
    let total=qty*cost
    console.log(`Total cost of ${item} is ₹${total}`)
}
defa(5,10,"Pen")

//without passing value for para
function defa(qty,cost,item){
    let total=qty*cost
    console.log(`Total cost of ${item} is ₹${total}`)
}
defa(5,"Pen")//here it consider pen as the value for second param and third is undefiened so total is NAN

//option 1 to tackle it
function defa1(qty,cost,item){
    let total=qty*cost
    console.log(`Total cost of ${item} is ₹${total}`)
}
defa1(5,undefined,"Pen")

//option 2 to takle is default param
function defa(qty,cost=15,item){
    let total=qty*cost
    console.log(`Total cost of ${item} is ₹${total}`)
}
defa(5,undefined,"Pen") 

//option 3 use default params to last
function defa(qty,item,cost=15){
    let total=qty*cost
    console.log(`Total cost of ${item} is ₹${total}`)
}
defa(5,"Pen") 

//now you can also use this

function defa(qty,item,cost=15){
    let total=qty*cost
    console.log(`Total cost of ${item} is ₹${total}`)
}
defa(5,"Pen",20) //if value is given then it dont take default or else it will give the default value
