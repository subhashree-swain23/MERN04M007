

//asynchronous / synchronous
// console.log("first line")
// setTimeout(()=>{
//     console.log("second line")
// },5000)
// console.log("third line")


//callback hell
// let getData=function(value,func){
//     setTimeout(()=>{
// console.log("value :",value);
// func()
//     },3000)

// }

// getData(1,()=>{
//   getData(2,()=>{
//      getData(3,()=>{
//         getData(4,()=>{
//             getData(5)
//         })
//      })
//    })
// });

// Promise
let Promise=new Promise((resolve,reject)=>{
    // resolve("promise resolve")
    reject("Promise reject")
});
console.log(Promise);

let getData = function (value) {
    return new Promise((res,rej) => {
        setTimeout(() =>{

        })
    })
}
console.log(getData(1));
// Promise handle




//spraed operator
//...
let arr1=[1,2,3];
let arr2=[4,5,6];

let spreadvalue=[...arr1,...arr2]
console.log(spreadvalue)

console.log(arr1.concat(arr2))

let obj1={
    x:2
}
let obj2={
    y:3
}

let spraedObj={...obj1,...obj2}
console.log(spraedObj)

// rest

let returnFunction=(first,...arg)=>{
    console.log(first)
    console.log(arg)
}

returnFunction(1,2,3,4,5)