//reverse a array
let array=["apple","mango","orange","bananna","mango"]


let reversedarray=[]
for(let i=array.length-1; i>=0; i--){
    reversedarray.push(array[i])
}
console.log(reversedarray)

//using built-in function
let result=array.reverse()
console.group(result)

//find the max val
arrayNum=[111,79794,1113,2413]
let maxVal=Math.max(...arrayNum)
console.log(maxVal)
let minVal=Math.min(...arrayNum)
console.log(minVal)


