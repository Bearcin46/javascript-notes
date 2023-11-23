let array=[9,3,7,5,6,4,8,2]
function merge(arr,l,h){
    if(l<h){
        let mid=Math.floor((l+h)/2);
        merge(arr,l,mid);
        merge(arr,mid+1,h);
        mergeSort(arr,l,mid,h)

    }
}
function mergeSort(a,l,m,h){
    //splitting array

    let c=[]
    let i=l; //left index
    let j=m+1; //right index
    let k=0;
    while(i<=m && j<=h){
        if(a[i]<a[j]){
            c[k++]=a[i++];
        }else{
            c[k++]=a[j++]
        }
    }
    for(;i<=m;i++){  //copy the remaining
        c[k++]=a[i]
    }
    for(;j<=h;j++){ //copy the remaining
        c[k++]=a[j]
    }

    //copy the sorted elements from c to a

    for(let i=l,k=0;i<=h;i++,k++){
        a[i]=c[k];
    }

}
merge(array,0,array.length-1)
console.log(array)