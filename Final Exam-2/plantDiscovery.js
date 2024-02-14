function plantDiscovery(input) {
    let numberOfPlants=Number(input.shift());
    let plants={};
    for(i=0;i<numberOfPlants;i++) {
        let tokens=input[i].split(`<->`);
        plants[tokens[0]]=[Number(tokens[1])];
    }
    input.splice(0,numberOfPlants);
    let command=input.shift();
    while(command!=`Exhibition`) {
        let tokens=command.split(`: `);
        if (tokens[0]==`Rate`) {
            let [currentPlant,rating]=tokens[1].split(` - `);
            if (currentPlant in plants) {
                plants[currentPlant].push(Number(rating));
            } else {
                console.log(`error`);
            }
        } else if (tokens[0]==`Update`) {
            let [currentPlant,newRarity]=tokens[1].split(` - `);
            if (currentPlant in plants) {
                plants[currentPlant][0]=Number(newRarity);
            } else {
                console.log(`error`);
            }
        } else if (tokens[0]==`Reset`) {
            let currentPlant=tokens[1];
            if (currentPlant in plants) {
                plants[currentPlant]=plants[currentPlant].slice(0,1);
            } else {
                console.log(`error`);
            }
        }
        command=input.shift();
    }
    console.log(`Plants for the exhibition:`);
    for (let [currentPlant,rarityAndRatings] of Object.entries(plants)) {
        let currentSum=0;
        for (i=1;i<rarityAndRatings.length;i++) {
            currentSum+=Number(rarityAndRatings[i]);
        }
        let avg=0;
        if (rarityAndRatings.length>1) {
            avg=currentSum/(rarityAndRatings.length-1);
        } 
        console.log(`- ${currentPlant}; Rarity: ${rarityAndRatings[0]}; Rating: ${avg.toFixed(2)}`);
    }
}

plantDiscovery((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]))