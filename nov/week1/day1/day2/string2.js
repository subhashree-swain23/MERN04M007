console.log("today we are going to learn string method");
let str="hello";
console.log(str[0])

//methods
//to get the indexing values
console.log(str.at(0))
console.log(str.charAt(1))

//string interpolation
let animal="cat"
console.log(`this is:${animal}`);

let url="https://www.qlith.com"
console.log(`${url}/login`);


//concardination
console.log("hello hye"+ 30);
console.log("hello".concat("bye"))

let str1="Ql ith   ";
console.log(str.length)
console.log(str1.trim())
console.log(str1)

// console.log(str.trimEnd())
// console.log(str1.trimStart())


// replace method
console.log(str1.replace("1","L"));
console.log(str1)

let desc="janhabi  is my bestfriend , her name is janhabi  , janhabi  has me😁"
console.log(desc.replaceAll("janhabi","anuska"));


let num=20;
console.log(num)
console.log(num.toString())

//slice method

let string="This is Qlith office";
console.log(string.slice(2,6));
console.log(string.slice(2));
console.log(string.slice(4,2)) //starting index < ending index
console.log(string.slice(5,6))
console.log(string.slice(-4,-2))

let strArr=string.split("");
console.log()
