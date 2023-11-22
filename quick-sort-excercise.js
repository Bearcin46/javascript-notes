//input=[0,2,1,-1,1,2,0,4,-1,4]

// let arr=[0,2,1,-1,1,2,0,4,-1,4] recursive expected o/p [-1, -1, 0, 0, 1, 1, 2, 2, 4, 4]
const arr=[10,16,8,12,15,6,3,9]

function quickSort(arr){
    if(arr.length < 2 ){
        return arr
    }
    let pivot=arr[arr.length-1];
    let left=[]
    let right=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(arr))






















//input=[0,2,1,-1,1,2,0,4,-1,4]
//as we are using quick sort take last element as infinity
// let arr=[0,2,1,-1,1,2,0,4,-1,4,] //recursive expected o/p [-1, -1, 0, 0, 1, 1, 2, 2, 4, 4]
// function partition(arr,l,h){
//     let pivot=arr[l]
//     let i=l;
//     let j=h+1; //instead og using h+1, im adding infinity to top end in input
//     while(i<j){
//         do{
//             i++
//         }while(arr[i] > pivot)
//         do{
//             j--
//         }while(arr[i] < pivot)
//         if(i<j){
//             let sort =arr[i];
//             arr[i]=arr[j];
//             arr[j]=sort
//         }
//     }
//     const swap=arr[i];
//     arr[i]=arr[j];
//     arr[j]=swap
//     return j
// }

// function excercise(arr,l,h){
//     if(l<h){
//         let j=partition(arr,l,h)
//         excercise(arr,l,j-1);
//         excercise(arr,j+1,h);

//     }
// }
// excercise(arr,0,arr.length-1)
// console.log(arr)