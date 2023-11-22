// const sweety={
//     paer:"sweety",
//     age:26,
//     home:"nagercoil"

// }
// sweety.education="engineering"
// console.log(sweety)

// function pizzashop(pizzasize){
// const pizza={
//     name:"crusty",
//     size:pizzasize
// }
// return{
//     bruh:()=>{
//         console.log(`name of pizza is ${pizza.name} and the size is ${pizzasize}`)
//     }
// }
// }

// mypizza=new pizzashop("small")
// mypizza.bruh()

// function ChocolateShop(name,quantity,rupees){
//         this.name=name,
//         this.quantity=quantity,
//         this.rupees=rupees
//         console.log(`Here is your ${name} of ${quantity} pieces, which is of cost ${rupees}`)
    
// }
// const shop=new ChocolateShop("Kitkat","2","10")
// console.log(shop)


//iife
// let b = 2;
// let c = 1;
// (()=> {
//      console.log(c + b);
// })();


// function fun(){
//     let d=b+c;
//     console.log(d)
// }
// fun()

//function arguments
// function fun(b,c){
//        return (b+c);
//         // console.log(d)
//     }
//     const result= fun(6,3)
//     console.log(result)


//traditional method
// function fun(){
//     let total=0;
// for (val of arguments){
//     total=val*2
//     console.log(total)
// }
// return total
// }
// const expense=fun(11,21,22,33,44,55,6,12,13,11)
// console.log(expense)

// //rest operator

// function arr(){
// return(

// )
// }
// const expense1=fun(11,21,22,33,44,55,6,12,13,11)
// console.log(expense1)


// (function(){const func=(...args)=>{
//     console.log(args)
//     console.log(arguments)
// }
// func(1,1,2,4,4,1,1,4)})(3,4,5,5,6)
//  const func=(n,d,...arg)=>{
//     console.log(...arg)
//     console.log(arguments)
//  }
//  func(1,1,2,3,3,33,5)

//sorting algorithm
// arr=[11,23,7,12,88]
// let sortedarr=arr.sort(function(a,b){
//     return a-b
// })
// console.log(sortedarr)

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

let a=[1,2,3,4,5]
a.toSpliced(1,1)
console.log(a.toSpliced(1,1))
console.log(a)