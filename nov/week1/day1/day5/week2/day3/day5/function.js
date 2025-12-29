console.log("hello we are going to learn function")

// function types
// =>anynomous function

//e.g
//   function(){
// any statement
// }

// declaration  --> function key word , () ,implementation


// => named function

function F1(){
    console.log("my F1 is executing");
}

// declaration -- >function , name of the function ,() ,implementation

F1();   //calling part

console.log(F1)

function F1(){
    console.log("second function")
}
F1()

// exprssional function 
let F2 = function(){
console.log("expressional function")
}
F2()

// declaration --> (let,const,var) key word,variable,assignment operator,anymous fun

console.log(typeof F2)


let print=function(value,v,arr,v){
    console.log("value :",value , v ,arr ,v) 
}

print(30,40,[1,2,3,4],80)
print(29)

// nested function

let parent=function(){
    let a=10;
    let child=function(){
        let b=30
        console.log("addition :",a+b)

        let child1=function(){ 
        }
        return child1;
    }
    return child
}

parent()()() // function currying




let returnFun=function(){
    console.log("before return")
    let obj={
        name:"xyz",
        age:20
    }
    return obj;
}

let value=returnFun()
console.log(value)

// arrow function

let arrowFun=()=>{
    console.log("this is a arrow function");
}
arrowFun()

 let addFun=(a,b)=>{
    let sum=a+b;
    return sum;
 }
 let sum=addFun(20,30);
console.log(sum);



let alloperation=(a,b,op)=>{
    return eval(`${a} ${op} ${b}`)
}




