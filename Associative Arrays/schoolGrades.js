function schoolGrades(input) {
    let averageGradesObject={};
    for (let student of input) {
        let tokens=student.split(` `);
        let studentName=tokens.shift();
        if (averageGradesObject.hasOwnProperty(studentName)) {
            for (let currentGrade of tokens) {
                averageGradesObject[studentName].push(currentGrade);
            }
        } else {
            averageGradesObject[studentName]=tokens;
        }
    }
    for (let [name,grades] of Object.entries(averageGradesObject)) {
        let sum=0;
        for (let currentGrade of grades) {
            sum+=Number(currentGrade);
        }
        let avg=(sum/grades.length).toFixed(2);
        averageGradesObject[name]=avg;
    }
    let entries=Object.keys(averageGradesObject);
    entries.sort((a,b) => a.localeCompare(b));
    for (let currentName of entries) {
        console.log(`${currentName}: ${averageGradesObject[currentName]}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])