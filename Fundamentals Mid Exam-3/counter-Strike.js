function counterStrike(array) {
    let totalEnergy=Number(array[0]);
    let i=1;
    let battlesWon=0;
    while (totalEnergy>0) {
        if (array[i]==`End of battle`) {
            break;
        } else {
            if (Number(array[i])>totalEnergy) {
                console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${totalEnergy} energy`);
                return;
            } else {
                totalEnergy-=Number(array[i]);
                battlesWon++;
            }
            if (battlesWon%3==0) {
                totalEnergy+=battlesWon;
            }
        }
        i++;
    }
    if (totalEnergy>=0 && (array[i]==undefined || array[i]==`End of battle`)) {
        console.log(`Won battles: ${battlesWon}. Energy left: ${totalEnergy}`);
    } else {
        console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${totalEnergy} energy`);
    }
}

counterStrike(["110",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])