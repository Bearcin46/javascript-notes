// const btnEl = document.getElementById("btn");
// const listEl = document.querySelector(".lists");
// const innerList = document.querySelectorAll(".list-items");
// btnEl.addEventListener("click", () => {
//   let inputVal = document.getElementById("input").value;
//   const liEl = document.createElement("li");
//   liEl.textContent = inputVal;
//   liEl.setAttribute("class", "list-items bg-white p-2 rounded");
//   liEl.setAttribute("ondblclick", "removeItem(event)");
//   listEl.insertAdjacentElement("afterbegin", liEl);

//   document.getElementById("input").value = "";
// });

// function removeItem(event) {
//   const eventTarget = event.target;
//   eventTarget.removeItem(eventTarget);
// }

const foodItems = document.querySelectorAll(".list-items");

Array.from(foodItems).forEach((val) => {
  console.log(val.textContent);
});

// const foodings = [];

// for (key of foodItems) {
//   let keys = key.textContent;
//   foodings.push(keys);
// }
// console.log(foodings);
