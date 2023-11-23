const arr = [ 1, 4, 2, 5, -2, 3 ] //sort in ascending order
function sorting(arr){
    let swapped;
    do{
        swapped=false;
        for(let i=0; i<arr.length; i++ ){
            if(arr[i] > arr[i+1]){
                const temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true
            }
        }
    }while(swapped)
}
sorting(arr)
console.log(arr)

//sorting in decending order

function decending(arr){
    let sorted
    do{
        sorted=false
        for(let i=arr.length-1; i>=0;i--){
            if(arr[i] > arr[i-1]){
                const temp=arr[i];
                arr[i]=arr[i-1];
                arr[i-1]=temp;
                sorted=true
            }
        }
    }while(sorted)
}
decending(arr)
console.log(arr)

//traditional way of sorting(ascending order)
// function bubblesort(val){
//     let sorted
//     do{
//          sorted=false;
//         for(let i=0; i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//                 sorted=true;
//             }
//         }
//     }while(sorted)

// }
// let arr=[11,23,7,12,88]
// bubblesort(arr)
// console.log(arr)

//bubble sorting for decending order if last need not to be changed

// let given=[11,23,7,12,88]

// function bubbledec(val){
//     let swapped
//     do{
//         swapped=false;
//         for(let i=given.length-1; i>=0; i--){
//             if(given[i] > given[i-1]){
//                 temp=given[i]
//                 given[i]=given[i-1]
//                 given[i-1]=temp
//                 swapped=true
//             }
//         }

//     }while(swapped)
// }

// bubbledec(given)
// console.log(given)


// function bubbleSort(arr,n){
//     let sorted;
//     for(let i=0;i<n-1;i++){
//         do{
//             sorted=false;
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i];
//             arr[i]=arr[i+1];
//             arr[i+1]=temp;
//             sorted=true
//             }
//         }while(sorted)
//     }
//    }
//  const arr=[4,1,3,9,7]
//   bubbleSort(arr,5)  
//   console.log(arr)
