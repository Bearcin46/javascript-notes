let btnEl=document.getElementById("submit");
btnEl.addEventListener("click",()=>{
   let nameEl=document.getElementById("enterName").value
   let chocoName=document.getElementById("cName").value;
   let chocoQlty=document.getElementById("cNumber").value;
   let chocoCost=document.getElementById("cCost").value;

   //total cost

   let totalCost =chocoQlty*chocoCost

   //converting name to caps for start and small for rest
   let firstName=nameEl.slice(0,1).toUpperCase()
   let lastName=nameEl.slice(1).toLowerCase()
   let correctedName=firstName + lastName;
   console.log(correctedName)
   

   //create array of chocolists
   const chocolist=["kitkat","diarymilk","fivestar","milkybar","snickers","mars","boundy"]
   //check whether included or not
   const findChoco=chocolist.includes(chocoName)
   console.log(findChoco)

   //condition
   if(findChoco===true){

   //constructor function
   function Chocolate(name,cname,cqlty,cost){
      this.name=name,
      this.choco=cname,
      this.qlty=cqlty,
      this.cost=cost
      alert(`Hi ${name}! here's your ${cqlty} ${cname} \n Total cost : Rs.${cost} `)

   }
   let result=new Chocolate(nameEl,chocoName,chocoQlty,totalCost)
   console.log(typeof result)
 
}else {
   alert(`Sorry! We dont have ${chocoName}`)
}

   
})


// const array=[{
//    choconame:"kitkat",
//    variety:[5,10,20]
   
// },
// {
//    choconame:"diarymilk",
//    chococost:30
// },
// {
//    choconame:"kitkat",
//    chococost:30
// },
// {
//    choconame:"kitkat",
//    chococost:30
// },
// ]