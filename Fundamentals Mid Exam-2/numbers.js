function numbers(stringArray) {
    let myArray=stringArray.split(` `);
    let sum=0;
    for (let a of myArray) {
        sum+=Number(a);
    }
    let avg=sum/myArray.length;
    let counter=0;
    let bigger=[];
    for (i=0;i<myArray.length;i++) {
        if (myArray[i]>avg) {
            bigger[counter]=myArray[i];
            counter++;
        }
    }
    if (counter==0) {
        console.log(`No`);
    } else {
        bigger.sort((a,b) => b-a)
        bigger.length=5;
        console.log(bigger.join(` `));
    }
}

// numbers('10 20 30 40 50')
numbers(`5 2 3 4 -10 30 40 50 20 50 60 60 51`)