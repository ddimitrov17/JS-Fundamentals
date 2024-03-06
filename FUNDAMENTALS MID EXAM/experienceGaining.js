function experienceGaining(array) {
    let neededExperience=array[0];
    let countOfBattles=array[1];
    array.shift();
    let experienceCollected=0;
    for (i=1;i<array.length;i++) {
        experienceCollected+=array[i];
        if (i%3==0) {
            experienceCollected+=array[i]*0.15;
        }
        if (i%5==0) {
            experienceCollected-=array[i]*0.1;
        }
        if (i%15==0) {
            experienceCollected+=array[i]*0.05;
        }
        if (experienceCollected>=neededExperience) {
            console.log(`Player successfully collected his needed experience for ${i} battles.`);
            return;
        }
    }
    console.log(`Player was not able to collect the needed experience, ${(neededExperience-experienceCollected).toFixed(2)} more needed.`);
}

experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    30])
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20])
experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20])