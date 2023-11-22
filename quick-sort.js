// const arr=[10,16,8,12,15,6,3,9]
let arr=[0,2,1,-1,1,2,0,4,-1,4] //recursive expected o/p [-1, -1, 0, 0, 1, 1, 2, 2, 4, 4]
//partition
function quick(arr,l,h){
   let pivot=arr[l];
    let i=l; 
    let j=h+1;  // i added one number as infinity
    while(i<j){
        do{
            i++
        }while(arr[i]<=pivot);
        do{
            j--
        }while(arr[j]>pivot);
        if(i<j){
            const temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    const swap=arr[l];
    arr[l]=arr[j];
    arr[j]=swap;
    return j;

}
//quick sort
function quickSort(arr,l,h){
    if(l<h){
       let j=quick(arr,l,h);
        quickSort(arr,l,j-1);//use j for normal and j-1 for recursive
        quickSort(arr, j + 1,h);
    }
}
quickSort(arr, 0, arr.length-1);
console.log(arr)