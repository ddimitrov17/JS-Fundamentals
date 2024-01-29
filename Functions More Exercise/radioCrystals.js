function radioCrystals(input) {
    let desiredMicrons=input[0];
    for (i=1;i<input.length;i++) {
        let startingMicrons=input[i];
        console.log(`Processing chunk ${startingMicrons} microns`);
        cut(desiredMicrons,startingMicrons)
    }
    function cut(a,b) {
        let counter=0;
        while (b/4>=a) {
            b=b/4;
            counter++;
        }
        if (counter>0) {
            console.log(`Cut x${counter}`);
            b=Math.floor(b);
            console.log(`Transporting and washing`);
        }
        if (b!==a) {
                lap(a,b)
            } else {
                console.log(`Finished crystal ${a} microns`);
        }
        }
    function lap(a,b) {
        let counter=0;
        while (b*0.8>=a) {
            b*=0.8;
            counter++;
        }
        if (counter>0) {
            console.log(`Lap x${counter}`);
            b=Math.floor(b);
            console.log(`Transporting and washing`);
        }
        if (b!==a) {
                grind(a,b)
            } else {
                console.log(`Finished crystal ${a} microns`);
        }
    }
    function grind(a,b) {
        let counter=0;
        while (b-20>=a) {
            b-=20;
            counter++;
        }
        if (counter>0) {
            console.log(`Grind x${counter}`);
            b=Math.floor(b);
            console.log(`Transporting and washing`);
        } 
        if (b!==a) {
                etch(a,b)
            } else {
                console.log(`Finished crystal ${a} microns`);
        }
    }
    function etch(a,b) {
        let counter=0;
        while (b-2>=a-1) {
            b-=2;
            counter++;
        }
        if (counter>0) {
            console.log(`Etch x${counter}`);
            b=Math.floor(b);
            console.log(`Transporting and washing`);
        } 
        if (b!==a) {
            xray(a,b)
        } else {
            console.log(`Finished crystal ${a} microns`);
        }
    }
    function xray(a,b) {
        b++;
        console.log(`X-ray x1`);
        console.log(`Finished crystal ${a} microns`);
    }
}

radioCrystals([1375, 1373])