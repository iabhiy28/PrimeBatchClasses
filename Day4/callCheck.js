const getMetaData = () =>{
    const name = prompt("Enter your name: ");
    console.log("HELLO!!!!",name);
    const numOfSubText = prompt("Enter the number of subjects: ");
    const numOfSub = parseInt(numOfSubText);
    return numOfSub;
};

const getSubject = (num) => {
    const record = {};
    for(let i=0; i<num; i++){
        const subName = prompt(`Enter the name of subject ${i+1}:`);
        const marks = prompt(`Enter the marks of subject ${i+1}:`);
        record[subName] = marks;
    }
    return record;
};


const getAverage = (record) => {
    let sum = 0;
    for(const key in record){
        sum += record[key];
    }
    return sum/record.length;
}

const main = () => {
    const num = getMetaData();
    const record = getSubject(num);
    const avg = getAverage(record);
    console.log("The average marks are: ",avg); 
}


main();