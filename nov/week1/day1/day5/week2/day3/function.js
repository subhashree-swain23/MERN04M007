// create a new Array that contains the length of each string from["react","node","mongoDB"]
let strArr = ["react","node","mongoDB"];
let strNum = [];
for (let v of strArr) {
    strNum.push(v,length)
}
console.log(strNum);

let numArr = [4,-2, 6, -9, 7];
for (let i=0; i < Number.length; i++){
    // if (numArr[i]< 0){
    //     numArr[i] = 0
    // }

    if(numArr[i]<0){
        numArr.splice(i,1,0);
    }
}

console.log(numArr)


let nameOFC=["QLITH"];
console.log(nameOFC.split(""))