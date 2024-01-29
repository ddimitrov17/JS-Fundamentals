function carWash(input) {
    let value=0;
    for (i=0;i<input.length;i++) {
        let command=input[i];
        switch (command) {
            case `soap`: value+=10; break;
            case `water`: value*=1.2; break;
            case `vacuum cleaner`: value*=1.25; break;
            case `mud`: value*=0.9; break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',

'water'])