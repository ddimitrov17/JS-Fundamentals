function pirates(input) {
    let command=input.shift();
    let cities={};
    while(command!=`Sail`) {
        let tokens=command.split(`||`);
        let cityName=tokens[0];
        let population=Number(tokens[1]);
        let gold=Number(tokens[2]);
        if (cityName in cities) {
            cities[cityName][0]+=population;
            cities[cityName][1]+=gold;
        } else {
            cities[cityName]=[population,gold];
        }
        command=input.shift();
    }
    let event=input.shift();
    while(event!=`End`) {
        let tokens=event.split(`=>`);
        if (tokens[0]==`Plunder`) {
            let townName=tokens[1];
            let killed=Number(tokens[2]);
            let looted=Number(tokens[3]);
            console.log(`${townName} plundered! ${looted} gold stolen, ${killed} citizens killed.`);
            cities[townName][0]-=killed;
            cities[townName][1]-=looted;
            if (cities[townName][0]<=0 || cities[townName][1]<=0) {
                delete cities[townName];
                console.log(`${townName} has been wiped off the map!`);
            }
        } else if (tokens[0]==`Prosper`) {
            let townName=tokens[1];
            let gold=Number(tokens[2]);
            if (gold<0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                cities[townName][1]+=gold;
                console.log(`${gold} gold added to the city treasury. ${townName} now has ${cities[townName][1]} gold.`);
            }
        }
        event=input.shift();
    }
    if (Object.keys(cities).length==0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let currentCity of Object.entries(cities)) {
            console.log(`${currentCity[0]} -> Population: ${currentCity[1][0]} citizens, Gold: ${currentCity[1][1]} kg`);
        }
    }
}

pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])