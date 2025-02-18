
// //FUNCTION DECLARATION
// function print(a){
//     console.log("Hello",a);
// }


// print("World");
// // can we define several time with same name 
// // we can call it before decration




// // FUNCTION EXPRESSION
// const views = function printText(a) {
//     console.log("Hello World",a);
// }

// views("World");
// printText("World");



// // ARROW FUNCTION

// const view = (a) => {
//     console.log("Hello World",a);
// }
// view("World");

// if we have only one parameter then we can remove the paranthesis 

//type 1
// function findSumMod(a,b){
//     return (a+b)%10;
// }


// const ans = findSumMod(2,3); 
// console.log(ans);


//type 2
const findmodSum = function findSumMod(a,b){
    return (a+b)%10;
}


const ans1 = findmodSum(2,3);
console.log(ans1);
console.log(findmodSum(2,3));

//type 3
const findmodSum1 = function (a,b){
    return (a+b)%10;
}
console.log(findmodSum1(2,3));

// type 4

const findmodSum2 = (a,b) => (a+b)%10;
console.log(findmodSum2(2,3));
