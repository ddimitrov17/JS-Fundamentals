function heroesOfCodeAndLogic(input) {
    let numberOfHeroes=Number(input.shift());
    let heroes={};
    for (i=0;i<numberOfHeroes;i++) {
        let [hero,hp,mp]=input[i].split(` `);
        heroes[hero]=[Number(hp),Number(mp)];
    }
    input.splice(0,numberOfHeroes);
    let command=input.shift();
    while(command!=`End`) {
        let tokens=command.split(` - `);
        if (tokens[0]==`CastSpell`) {
            let heroName=tokens[1];
            let mpNeeded=Number(tokens[2]);
            let spellName=tokens[3];
            if (heroes[heroName][1]>=mpNeeded) {
                heroes[heroName][1]-=mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName][1]} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (tokens[0]==`TakeDamage`) {
            let heroName=tokens[1];
            let damage=Number(tokens[2]);
            let attacker=tokens[3];
            if (heroes[heroName][0]-damage>0) {
                heroes[heroName][0]-=damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName][0]} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName];
            }
        } else if (tokens[0]==`Recharge`) {
            let heroName=tokens[1];
            let amount=Number(tokens[2]);
            let currentMP=heroes[heroName][1];
            let rechargedFor=0;
            if (currentMP+amount>200) {
                rechargedFor=200-currentMP;
                heroes[heroName][1]=200;
            } else {
                heroes[heroName][1]+=amount;
                rechargedFor=amount;
            }
            console.log(`${heroName} recharged for ${rechargedFor} MP!`);
        } else if (tokens[0]==`Heal`) {
            let heroName=tokens[1];
            let amount=Number(tokens[2]);
            let currentHP=heroes[heroName][0];
            let healedFor=0;
            if (currentHP+amount>100) {
                healedFor=100-currentHP;
                heroes[heroName][0]=100;
            } else {
                heroes[heroName][0]+=amount;
                healedFor=amount;
            }
            console.log(`${heroName} healed for ${healedFor} HP!`);
        }
        command=input.shift();
    }
    for (let currentHero of Object.entries(heroes)) {
        console.log(`${currentHero[0]}`);
        console.log(`  HP: ${currentHero[1][0]}`);
        console.log(`  MP: ${currentHero[1][1]}`);
    }
}

heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
    ])