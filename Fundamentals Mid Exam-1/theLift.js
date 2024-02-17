function theLift(array) {
    let waiting=Number(array[0]);
    let wagons=array[1].split(` `).map(Number);
    for (i=0;i<wagons.length;i++) {
        if (wagons[i]<4) {
            let freeSpaces=4-wagons[i];
            if (waiting>0) {
            wagons[i]+=Math.min(waiting,freeSpaces);
            waiting=waiting-Math.min(waiting,freeSpaces);
            }
        }
    }
    if (waiting==0 && wagons[wagons.length-1]==4) {
        console.log(wagons.join(` `));
    } else if (waiting>0) {
        console.log(`There isn't enough space! ${waiting} people in a queue!`);
        console.log(wagons.join(` `));
    } else {
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(` `));
    }
}

theLift(["15","0 0 0 0 0"])
theLift(["20","0 2 0"])
theLift(["2","4 4 2"])