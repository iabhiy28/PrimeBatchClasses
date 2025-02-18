
const name = prompt("Enter your name: ");
const noSub = prompt("Enter the number of subjects: ");

let marks = [];
for (let i = 0; i < noSub; i++) {
    marks.push(prompt(`Enter marks for subject ${i + 1}: `));
}

let total = 0;
for (let i of marks) {
    total += parseInt(i);
}
alert(`Total marks: ${total}`);
alert("Percentage: " + (total / noSub) + "%");
let maxMark = 0;
for(let i = 0; i < marks.length; i++){
    if(marks[i] > maxMark){
        maxMark = marks[i];
    }
}

alert(`Highest marks: ${maxMark}`);




//// now implementing using the object

// const s1 = prompt("Enter your name: ")

// const studentData = {}
// const noSub = prompt("Enter the number of subjects: ");
// for(let i = 0; i < noSub,; i++){
//     const key = prompt(`Enter subject ${i + 1}`);
//     const value = prompt(`Enter marks for subject ${i + 1}`);
//     studentData[key] = value;
// }