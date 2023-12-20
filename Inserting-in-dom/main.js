const foodEl = document.getElementById("food-items");
const divEl = document.getElementById("main-div");
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "Biriyani";
  foodEl.append(newEl);
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "Chiken-Biriyani";
  foodEl.appendChild(newEl);
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "Mutton-Biriyani";
  foodEl.prepend(newEl);
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "Egg-Biriyani";
  foodEl.after(newEl); //out of ul
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "Prawn-Biriyani";
  foodEl.before(newEl); //out of ul
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "Fish-Biriyani";
  foodEl.insertAdjacentText("afterbegin", newEl); //inside ul, not supported o/p [object , HTMLelement]
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "Fish-Biriyani";
  foodEl.insertAdjacentText("afterend", "newEl"); //out of ul (only text) not in li form
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "Barrotta";
  foodEl.insertAdjacentElement("afterend", newEl); //out of ul but in form of list
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "Fried rice";
  foodEl.insertAdjacentElement("afterbegin", newEl); //inside ul but in form of list
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "Barrotta-salna";
  foodEl.insertAdjacentElement("beforeend", newEl); //last element of ul but in form of list
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "rice";
  foodEl.insertAdjacentElement("beforebegin", newEl); //outside ul but in form of list
});
btnEl.addEventListener("click", () => {
  const newEl = document.createElement("li");
  newEl.textContent = "yellow-rice";
  foodEl.insertAdjacentHTML("beforebegin", newEl); //outside ul but in form of list o/p-[object HTMLLIElement]
}); //use <li>food</li>
