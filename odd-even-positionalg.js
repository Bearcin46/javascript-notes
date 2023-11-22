// input array
let input = [2, 12, 9, 5, 10, 1, 8];

// function to sort an array by even and odd positions
function sortArrayByPosition(array) {
  // create two arrays to store the even and odd position elements
  let evenArray = [];
  let oddArray = [];

  // loop through the input array and push the elements to the corresponding arrays
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      // even position
      evenArray.push(array[i]);
    } else {
      // odd position
      oddArray.push(array[i]);
    }
  }

  // sort the even array in descending order
  evenArray.sort((a, b) => b - a);

  // sort the odd array in ascending order
  oddArray.sort((a, b) => a - b);

  // create a new array to store the sorted elements
  let sortedArray = [];

  // loop through the even and odd arrays and merge them into the sorted array
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      // even position
      sortedArray.push(evenArray.shift());
    } else {
      // odd position
      sortedArray.push(oddArray.shift());
    }
  }

  // return the sorted array
  return sortedArray;
}

// call the function and print the output
let output = sortArrayByPosition(input);
console.log(output); // [10, 1, 9, 5, 8, 12, 2]

