

// let a={};
// let b=a

// console.log(a=b)

// console.log(0 === undefined)


//for-in       /   for-of 

let arr=[1,2,3,4,5];

// for(let idx=0 ;idx<=arr.length-1;idx++){

//     console.log(idx + ":" ,arr[idx]);
// }

for (let i in arr){
console.log(arr[i])

}

let obj={
    name:"amorrrr😒",
    age:"25",
    email:"amor@gmail.com",
    password:"sony2006",
    arr1:[1,2,3,4]

}


for(let key in obj){
    console.log(key , obj[key])
}


// for(let v in obj){
//     console.log(v)
// }

for(let v of obj.age){
    console.log(v)
}



let numArr=[1,2,3,4,5,6,7,8,9];
for(let v of numArr){
    if(v==5){
        break;
    }
    console.log(v)
}
for(let v of numArr){
    if(v==5){
        continue;
    }
    console.log(v);
}



let stdobj={
    fullName:"subhashree swain",
    phone:987654678,
    email:"swain@gmail.com"
}

console.log(stdobj.fullName)

stdobj.fullName="aparajita"; //re-initialization
console.log(stdobj.fullName)

// stdobj={
//     fullName:"samay"
// }

// console.log(stdobj.fullName)