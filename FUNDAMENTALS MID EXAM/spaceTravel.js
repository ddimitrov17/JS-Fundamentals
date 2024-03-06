function spaceTravel(array) {
    let travelRoute=array.shift().split(`||`);
    let totalFuel=Number(array[0]);
    let totalAmmunition=Number(array[1]);
    let i=0;
    while (travelRoute[i]!=`Titan`) {
        let command=travelRoute[i].split(` `);
        if (command[0]==`Travel`) {
            let distanceToTravel=Number(command[1]);
            if (totalFuel>=distanceToTravel) {
                totalFuel-=distanceToTravel;
                console.log(`The spaceship travelled ${distanceToTravel} light-years.`);
            } else {
                console.log(`Mission failed.`);
                return;
            }
        } else if (command[0]==`Enemy`) {
            let enemyArmor=Number(command[1]);
            if (totalAmmunition>=enemyArmor) {
                totalAmmunition-=enemyArmor;
                console.log(`An enemy with ${enemyArmor} armour is defeated.`);
            } else if (totalAmmunition<enemyArmor && totalFuel>=enemyArmor*2) {
                totalFuel=totalFuel-(enemyArmor*2);
                console.log(`An enemy with ${enemyArmor} armour is outmaneuvered.`);
            } else {
                console.log(`Mission failed.`);
                return;
            }
        } else if (command[0]==`Repair`) {
            let amountOfRepair=Number(command[1]);
            totalFuel+=amountOfRepair;
            totalAmmunition=totalAmmunition+(amountOfRepair*2);
            console.log(`Ammunitions added: ${amountOfRepair*2}.\nFuel added: ${amountOfRepair}.`);
        }
        i++;
    }
    console.log(`You have reached Titan, all passengers are safe.`);
}

// spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', 
// '50', 
// '80'])
// spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
// '60', 
// '100'])
spaceTravel(['Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100'])