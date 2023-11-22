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