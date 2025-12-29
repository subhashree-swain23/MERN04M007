



















































console.log(useSyncExternalStore.every(v => v.active ===true));





//check if all elements in an array are unique using only every().

let numArr = [1, 2, 4, 3, 5]


// check if any product out of stock


// let products = [
//     { name:  "pen", qty: 10}
//     { name: "pencil", qty: 5}
//     { name: "book", qty:0}
// ];

console.log(products.some(v => v.qty === 0))

// find the first user with admin = true:


// math

console.log(Math.PI)
console.log(Math.SQRT2);   //
console.log(Math.SQRT1_2)   //sqroot of 1/2
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console/log(Math.LOG10E);


//function //methods
console.log(Math.max(1,2,4,50));
console.log(Math.min(1,2,3,4));
console.log(Math.round(1.200))
console.log(Math.floor(-4.5));
console.log(Math.ceil(4.3));
console.log(math.random())
console.log(math.pow(2,3));
console.log(math.sqrt(40));
console.log(math.cbrt(27));

console.log(math.abs(2.313313313));

let obj={
    name:"qlith"
    age: 20,
    phone:7978998139
}


delete obj.phone
console.log(obj);

Object.freeze(obj)
obj.age=40;


console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

console.log(Object.fromEntries([[1,1],[2.4],[3,9]]));
let x={
    a:1
}
let y
