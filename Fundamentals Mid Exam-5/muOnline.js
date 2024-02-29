function muOnline(rooms) {
    let roomsArray=rooms.split(`|`);
    let isDead=false;
    let initialHealth=100;
    let currentRoom=0;
    let totalBitcoins=0;
    for (i=0;i<roomsArray.length;i++) {
        currentRoom++;
        let tokens=roomsArray[i].split(` `);
        if (tokens[0]==`potion`) {
            potion(Number(tokens[1]));
        } else if (tokens[0]==`chest`) {
            chest(Number(tokens[1]));
        } else {
            monster(tokens[0],Number(tokens[1]));
        }
        if (isDead) {
            console.log(`Best room: ${currentRoom}`);
            return;
        }
    }
    function potion(heal) {
        if (initialHealth+heal>100) {
            heal=100-initialHealth;
            initialHealth=100;
        } else {
            initialHealth+=heal;
        }
        console.log(`You healed for ${heal} hp.`);
        console.log(`Current health: ${initialHealth} hp.`);
    }
    function chest (bitcoins) {
        console.log(`You found ${bitcoins} bitcoins.`);
        totalBitcoins+=bitcoins;
    }
    function monster(monster,attack) {
        if (initialHealth-attack>0) {
            console.log(`You slayed ${monster}.`);
            initialHealth-=attack;
        } else {
            console.log(`You died! Killed by ${monster}.`);
            isDead=true;
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${totalBitcoins}`);
    console.log(`Health: ${initialHealth}`);
}



// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")