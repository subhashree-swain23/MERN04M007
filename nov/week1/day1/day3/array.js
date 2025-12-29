console.log("Today we are going to learn Array.")//Array : collection of data of similar as well as different data type.


//Array can be created in two ways:

//normal way
let arr=[1,[9,8],2,3,4];
console.log(arr) 

//By using new keyword or by creating object:

let newArr=new Array(5,6,7);
console.log(newArr)

//Access
console.log(arr[0])
console.log(newArr[2])

//here "Array" is a array and "newArray(index : 1)" and "arr(index : 2)" are two value of array
console.log(Array.of(newArr,arr))
console.log(Array.of(newArr,arr,"sony",142));
let str = Array.of(newArr,arr,"sony",142);
console.log(str[1][1][0]);


let arr1=[9,8,7,0];
for(let i=0;i<=arr1.length-1;i++){
console.log(arr1[i]);
} 

let arr2=[85,97,44,37,76,60];

for(let i=0;i<=arr2.length-1;i++)
    for(let i=0;i<=arr2.length-1;){
    sumArr+= arr2[i];
    i++;
    // console.log(sumArr);
    
 } console.log("Average is : ",sumOfArr/arr2.length); 


let arr3=[250,645,300,900,50];
let sumOfArr=0;
let addOfArr=0;
for(let i=0;i<=arr3.length-1;i++){
    sumOfArr= arr3[i];
    discountArr= sumOfArr-(sumOfArr*10/100);
    addOfArr+=discountArr;    
} console.log(addOfArr);


