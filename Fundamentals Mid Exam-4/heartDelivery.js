function heartDelivery(array) {
    let neighbourhood=array.shift().split(`@`).map(Number);
    let i=0;
    let cupidPosition=0;
    while(array[i]!=`Love!`) {
        let command=array[i].split(` `);
        cupidPosition+=Number(command[1]);
        if (cupidPosition>=neighbourhood.length) {
            cupidPosition=0;
        }
        if (neighbourhood[cupidPosition]==0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
        } else {
            neighbourhood[cupidPosition]-=2;
            if (neighbourhood[cupidPosition]==0) {
                console.log(`Place ${cupidPosition} has Valentine's day.`);
            }
        }
        i++;
    }
    let failed=0;
    for (let a of neighbourhood) {
        if (a!=0) {
            failed++;
        }
    }
    console.log(`Cupid's last position was ${cupidPosition}.`);
    if (failed==0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${failed} places.`);
    }
}

// heartDelivery(["10@10@10@2",
// "Jump 1",
// "Jump 2",
// "Love!"])
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])