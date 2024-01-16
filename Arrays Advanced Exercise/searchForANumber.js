function searchForANumber(array,myArray) {
    let checkArray=array.splice(0,myArray[0]);
    let counter=0;
    checkArray.splice(0,myArray[1]);
    for (let num of checkArray) {
        if (num==myArray[2]) {
            counter++;
        }
    }
    console.log(`Number ${myArray[2]} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3])