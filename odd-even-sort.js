//sorting array of odd numbers in ascending order 
//but even numbers position should not change
// const numbers = [5,3,2,8,1,4];
//expected output [1,3,2,8,5,4]
// let array=[]
// numbers.filter((v,i)=> v%2 && array.push(i))
// .sort((a,b)=>a-b)
// .forEach((value,index)=> numbers[array[index]]=value)
// console.log(numbers)


//sorting array of even numbers in ascending order 
//but odd numbers position should not change
// const numbers1 = [5,3,2,8,1,4];
// //expected output [5, 3, 2, 4, 1, 8]
// let array1=[]
// numbers1.filter((v,i)=> v%2===0 && array1.push(i))
// .sort((a,b)=>a-b)
// .forEach((value,index)=> numbers1[array1[index]]=value)
// console.log(numbers1)

//position sorting
//write a program to sort array by even position in decending order and odd position in ascending order

// let input=[2,12,9,5,10,1,8]  //expected output=[12,1,10,2,9,5,8] 
//from the given output we found that greater than 7 in even position
//and less than 7 in odd position
// let firstArray=[];
// let secondArray=[];
// let firstinput=input.filter((v)=> v > 7 && firstArray.push(v))
// firstArray.sort((a,b)=>b-a)
// let secondinput=input.filter((v)=> v < 7 && secondArray.push(v))
// secondArray.sort((a,b)=>a-b)
// let output=[] //in new array we're sorting position
// for(let i=0;i<input.length;i++){
//     if(i%2==0){
//         output[i]=firstArray.shift();
//     }else{
//         output[i]=secondArray.shift();
//     }
// }
// console.log(output)



//practice2
//position sorting
// let input=[1,2,3,4,5,6,7]  //expected output=[7,1,6,2,5,3,4] 
//from the given output we found that greater than 7 in even position
//and less than 7 in odd position
// let firstArray=[];
// let secondArray=[];
// let firstinput=input.filter((v)=> v >=4 && firstArray.push(v))
// firstArray.sort((a,b)=>b-a)
// let secondinput=input.filter((v)=> v < 4 && secondArray.push(v))
// secondArray.sort((a,b)=>a-b)
// let output=[] //in new array we're sorting position
// for(let i=0;i<input.length;i++){
//     if(i%2==0){
//         output[i]=firstArray.shift();
//     }else{
//         output[i]=secondArray.shift();
//     }
// }
// console.log(output)


//even in descending odd in ascending
//practice3
// const array=[1,2,3,4,5,6,7,8,9]  //expected output [9,2,7,4,5,6,3,8,1]
// let firstArray=[]
// let secondArray=[]
// let eveninput=array.filter((v,i)=>i%2===0 && firstArray.push(v))
// firstArray.sort((a,b)=>b-a)
// let oddinput=array.filter((v,i)=>i%2!==0 && secondArray.push(v))
// secondArray.sort((a,b)=>a-b)
// let output=[]
// for(let i=0;i<array.length;i++){
//     if(i%2===0){
//         output[i]=firstArray.shift()
//     }else{
//         output[i]=secondArray.shift()
//     }
// }
// console.log(output)


//even in descending odd in ascending
//practice3
const array=[13,2,4,15,12,10,5]  //expected output [13,2,12,10,5,15,4]
let firstArray=[]
let secondArray=[]
let eveninput=array.filter((v,i)=>i%2===0 && firstArray.push(v))
firstArray.sort((a,b)=>b-a)
let oddinput=array.filter((v,i)=>i%2!==0 && secondArray.push(v))
secondArray.sort((a,b)=>a-b)
let output=[]
for(let i=0;i<array.length;i++){
    if(i%2===0){
        output[i]=firstArray.shift()
    }else{
        output[i]=secondArray.shift()
    }
}
console.log(output)

