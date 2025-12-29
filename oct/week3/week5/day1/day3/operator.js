console.log("today is the second class of operator")


// console.log(num1 + num2 / 2 * 4);
let obj={
    name:"xyz"
}

// console.log(obj.age)

// console.log({} == {})
// console.log([] == [])
// console.log(undefined == undefined)
// console.log(null == null)
// console.log(undefined == {})
// console.log(null == {})
// console.log(undefined === null)

console.log(false && "it is true")


// if(condition){
//     statement
// }


if(false){
    console.log("this is execute only if the conition is true")
}else{
    console.log("this is execute if condition is false")
}

// if(true)
//      console.log(first)

if(false){

}else if(false){

}else{

}

// condition ? "if true" : "if false"

console.log(null ? "it is true":"it is false")

if(undefined){
    console.log("it is 2")
}

let a=2;
if((a>1) && (a++<4)){
    console.log("true",a)
}else{
    console.log("false",a)
}

// const number=prompt("enter your age")
// console.log(number)

// if (number%8==0){
//     console.log("number is multiple of 8");
// }

const score=prompt("enter ur score")
console.log(score);

if(score>=80 && score<100){
    console.log("a grade");
}else if (score>=70 && score<89){
    console.log("B grade");
}else if (score>=60 && score<69){
    console.log("C grade");
}else if (score>=50 && score<59){
    console.log("D grade");
}else if (score>=59 && score<49){
    console.log("F grade")
}