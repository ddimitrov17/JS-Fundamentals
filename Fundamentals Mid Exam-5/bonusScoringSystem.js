function bonusScoringSystem(array) {
    array.map(Number);
    let totalStudents=array[0];
    let totalLectures=array[1];
    let additionalBonus=array[2];
    let maxBonus=0;
    let maxAttendances=0;
    for(i=3;i<array.length;i++) {
        let currentAttendances=array[i];
        let currentBonus=Math.ceil((array[i]/totalLectures)*(5+Number(additionalBonus)));
        if (currentBonus>maxBonus) {
            maxBonus=currentBonus;
            maxAttendances=currentAttendances;
        }
    }
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])