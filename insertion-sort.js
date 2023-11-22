let array=[1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]

//give a function for sorting ascending order
function insert(arr){
for(let i=1; i<arr.length; i++){
    for(let j=i; j>0;j--){
        if(arr[j] < arr[j-1]){
            const temp=arr[j];
            arr[j]=arr[j-1];
            arr[j-1]=temp
        }else{
            break;
        }
    }
}
}
insert(array)
console.log(array)

//function for sorting decending order, here we go from last

function inserts(arr){
    for(let i=arr.length-2;i>=0;i--){
        for(let j=i; j<arr.length-1; j++){
            if(arr[j] < arr[j+1]){
                const temp=arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=temp;
            }else{
                break
            }
        }
    }
}

const given=[5,3,8,2,1,3]
inserts(given)
console.log(given)


//practice

n = 10;
ques= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function practice1(arr,n){
    for(let i=1; i<n ; i++){
        for(j=i;j>0;j--){
            if(arr[j] < arr[j-1]){
                const temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;

            }else{
                break;
            }
        }
    }
}
practice1(ques,n)
console.log(ques)

//practice2
l= 5
arr1 = [ 4, 1, 3, 9, 7]
function practice2(arr,n){
    for(let i=1;i<n;i++){
        for(let j=i; j>0;j--){
            if(arr[j] < arr[j-1]){
                const temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }else{
                break
            }
        }
    }
}
practice2(arr1,l)
console.log(arr1)

//practice3 decreasing

const arr2 = [ 1, 4, 2, 5, -2, 3 ]
function practice3(arr){
    for(let i=1;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j]>arr[j-1]){
                const temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp
            }else{
                break;
            }
        }
    }
}
practice3(arr2)
console.log(arr2)