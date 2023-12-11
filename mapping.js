const array = [
  {
    id: 1,
    name: "Sweety",
    country: "malaysia",
  },
  {
    id: 2,
    name: "Sajid",
    country: "Srilanka",
  },
  {
    id: 3,
    name: "Yogaraj",
    country: "India",
  },
  {
    id: 4,
    name: "Akalya",
    country: "India",
  },
  {
    id: 5,
    name: "Muthu Kumari",
    country: "India",
  },
];

const newArr = array.map((val) => {
  if (val.country === "malaysia") {
    return { id: 1, name: "SweetyBS", livesin: "India" };
  } else {
    return val;
  }
});
console.log(newArr);

for (let i = 11; i >= 1; i--) {
  console.log("♥️".repeat(i));
}

for (let i = 11; i >= 1; i--) {
  let heartSymbol = "";
  for (let j = 0; j < i; j++) {
    heartSymbol += "♥️";
  }
  console.log(heartSymbol);
}
