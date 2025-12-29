console.log("Welcome to variable second class");

//var, let, const
// The way of declaration.

//*var
//only declaration
var a;
console.log(a)

//only declaration of variable using var keyword is possible

//only initialization

a=10;
console.log(a)

//only initialization is possible

var b=20;
console.log(b)

//both initialization and declaration is possible.

var b;
console.log(b)

var b=30;
console.log(b)

//redeclaration and re-initialization is possible.


//let keyword
//only declaration

let name;
console.log(name)//possible

fullName="smruti"
console.log(fullName)

//both
let abc=20;
console.log(abc)

// let fullName;
//re-declaration is not possible.
//both redeclaration and initialization is not possible.

//const
//only declaration
//const age;  //not possible

//only initialization is  not possible.
//both declaration and initialization.

const age=30;
console.log(age)

// age=40;
// console.log(age)// re-initialization is not possible


// hoisting concept and tdz (temporary dead zone)
// {
//     let email="sony@gmail.com"
// }

console.log(email)
var email="subha@gmail.com";

console.log("second", email)


//  premitive data type
// Number
// String
// Boolean
// undefined
// null
// Bigint
//symbol

let subhaAge=40;
console.log(subhaAge)

let subhaName="subhashreeswain"
console.log(subhaName)

let isunMarried=true;
console.log(isunMarried)

let village=undefined;
console.log(village)

let subhaHaveRelationsts=null;
console.log(subhaHaveRelationsts);

let subhaMobileNo=BigInt(7978998139);
console.log(subhaMobileNo)

let subhaFacestructure=Symbol("oval");
console.log(subhaFacestructure)


// non primitive data type
//Object
//Array


let obj={
    name:"subhashree",
    age:"19",
    email:"subha@gmail.com",
    phone:"7978998139"
}

console.log(obj.name)
console.log(obj.email)

console.log(obj["phone"])
console.log(typeof typeof obj)
console.log(typeof typeof obj.phone)




//array
let arr=[1,2,3,4,5];
console.log( typeof arr);
console.log( arr[5])
