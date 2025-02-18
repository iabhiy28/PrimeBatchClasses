const getMetaData = () => {
    const name = prompt("Enter your name: ");
    console.log("HELLO!!!!", name);
    const numOfSubText = prompt("Enter the number of subjects: ");
    const numOfSub = parseInt(numOfSubText);
    
    if (isNaN(numOfSub) || numOfSub <= 0) {
        console.error("Invalid number of subjects.");
        return 0;
    }
    return numOfSub;
};

const getSubject = (num) => {
    const record = {};
    for (let i = 0; i < num; i++) {
        const subName = prompt(`Enter the name of subject ${i + 1}:`);
        const marksText = prompt(`Enter the marks of subject ${i + 1}:`);
        const marks = parseFloat(marksText);

        if (isNaN(marks)) {
            console.error(`Invalid marks entered for ${subName}.`);
            return {};
        }
        record[subName] = marks;
    }
    return record;
};

const getAverage = (record) => {
    let sum = 0;
    const subjects = Object.keys(record);

    for (const key of subjects) {
        sum += record[key];
    }
    return sum / subjects.length;
};

const getMaxMark = (record) => {
    const marks = Object.entries(record);
    let maxi = 0;
    let subjectName
    marks.forEach((mark) => {
        const [subject, markValue] = mark;
        if (markValue > maxi) {
            maxi = markValue;
            subjectName = subject;
        }
        return { maxi, subjectName };
    });
    return maxi;
}



const main = () => {
    const num = getMetaData();

    const record = getSubject(num);

    const avg = getAverage(record);
    const maxMark = getMaxMark(record);
    ons
    alert("The average marks are: ", avg);
    alert("The maximum marks are: ", maxMark);
    alert("Percentage is: ", avg + "%");
};

main();
