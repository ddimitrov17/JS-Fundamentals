function train(array) {
    let wagons=array[0].split(` `).map(Number);
    let maxCapacity=Number(array[1]);
    for (i=2;i<array.length;i++) {
        let command=array[i].split(` `);
        if (command[0]==`Add`) {
            wagons.push(Number(command[1]));
        } else {
            for (j=0;j<wagons.length;j++) {
                if (wagons[j]+Number(command[0])<=maxCapacity) {
                    wagons[j]+=Number(command[0])
                    break;
                } 
            }
        }
    }
    console.log(wagons.join(` `));
}

train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])