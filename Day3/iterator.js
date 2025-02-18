const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], end = " ");
}

console.log("New line");
for(let i of arr){
    console.log(i, end = " ");
}
console.log("New line");
for(let i in arr){
    console.log(i, end = " ");
}