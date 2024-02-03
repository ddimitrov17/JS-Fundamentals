function piccolo(input) {
    let parkingLot={};
    for (let currentCar of input) {
        let [action,car]=currentCar.split(`, `);
        if (action==`IN`) {
            parkingLot[car]=0;
        } else {
            parkingLot[car]=1;
        }
    }
    let filtered=Object.entries(parkingLot)
    .filter((a) => a[1]!=1)
    .sort((a,b) => a[0].localeCompare(b[0]) || a[0]-b[0]);
    if (filtered.length==0) {
        console.log(`Parking Lot is Empty`);
        return;
    }
    for (let current of filtered) {
        console.log(current[0]);
    }
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])