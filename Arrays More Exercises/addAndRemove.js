function addAndRemove(arrayInstructions) {
    let printArray=[];
    let c=0;
    for (i=0;i<arrayInstructions.length;i++) {
        if (arrayInstructions[i]==`add`) {
            printArray[c]=i+1;
            if (arrayInstructions[i+1]!==`remove`) {
                c++;
            }
        } else if (arrayInstructions[i]==`remove`) {
            printArray.pop();
        }
    }
    if (printArray.length==0) {
        console.log(`Empty`);
    } else {
    console.log(printArray.join(` `));
    }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])