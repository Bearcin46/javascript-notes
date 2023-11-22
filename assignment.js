let arr=[8,3,12,6,4,7,2,11,15,13];
let first=[];
let second=[]
function sort(){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] % 2 ===0){
            first.push(arr[i]);
        }else if(arr[i] % 2 !==0){
            second.push(arr[i]);
        };
    }
}

class Solution{
  
    bitonicGenerator(arr, n) {
      // create evenArr[] and oddArr[]
      let evenArr = [];
      let oddArr = [];
  
      // Put elements in oddArr[] and evenArr[] as
      // per their position
      for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
          evenArr.push(arr[i]);
        } else {
          oddArr.push(arr[i]);
        }
      }
  
      // sort evenArr[] in ascending order
      // sort oddArr[] in descending order
      evenArr.sort((a, b) => a - b);
      oddArr.sort((a, b) => b - a);
  
      let i = 0;
      for (let j = 0; j < evenArr.length; j++) {
        arr[i++] = evenArr[j];
      }
      for (let j = 0; j < oddArr.length; j++) {
        arr[i++] = oddArr[j];
      }
    }
  }