const arr = [1, 2, 3, 4, 5];
// to push at the beginning of the array
arr.unshift(0);
// to push  at the end of the array
arr.push(6);
console.log(arr);


// to remove any index from the array
arr.splice(2, 1);
console.log(arr);
delete arr[3];
console.log(arr);