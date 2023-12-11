let ration = [
  {
    id: 1,
    items() {
      return `You will be given rice,dall,sugar,oil,wheat`;
    },
    totalprice: 80,
  },
  {
    id: 2,
    items() {
      return `You will be given rice`;
    },
    totalprice: 140,
  },
  {
    id: 3,
    items() {
      return `You will be given dall`;
    },
    totalprice: 280,
  },
  {
    id: 4,
    items() {
      return `You will be given wheat`;
    },
    totalprice: 380,
  },
];

(function rationShop(person) {
  let findItem = ration.find((val) => {
    return val.id === person;
  });
  if (person === 1) {
    console.log(
      `${findItem.items()} for ${findItem.id} person and the total price is ${
        findItem.totalprice
      }`
    );
  } else {
    console.log(
      `${findItem.items()} for ${findItem.id} persons and the total price is ${
        findItem.totalprice
      }`
    );
  }
})(2);
