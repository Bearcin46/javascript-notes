const nameEl=document.getElementById("enterName")
const submitBtn=document.getElementById("submit")
submitBtn.addEventListener("click",()=>{
    let nameInput=nameEl.value;
    const newElement=document.createElement("h3")
    newElement.innerText=nameInput;
    document.body.appendChild(newElement)

})