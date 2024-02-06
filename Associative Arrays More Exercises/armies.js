function armies(input) {
    let leaders={};
    let leaderName;
    for (let currentCommand of input) {
        if (currentCommand.includes(`arrives`)) {
            let leaderName=currentCommand.split(` arrives`)[0];
            leaders[leaderName]={};
        } else if (currentCommand.includes(`defeated`)) {
            let leaderName=currentCommand.split(` defeated`)[0];
            delete leaders[leaderName];
        } else if (!currentCommand.includes(`+`)) {
            let [leaderName,army]=currentCommand.split(`: `);
            let [armyName,armyCount]=army.split(`, `);
            if (leaders.hasOwnProperty(leaderName)) {
                leaders[leaderName][armyName]=Number(armyCount);
            } else {
                continue;
            }
        } else if (currentCommand.includes(`+`)) {
            let [armyName,armyCount]=currentCommand.split(` + `);
            for (let currentArmy of Object.values(leaders)) {
                if (currentArmy.hasOwnProperty(armyName)) {
                    currentArmy[armyName]+=Number(armyCount);
                }
            }
        }
    }
    let leadersAndTotal={};
    for (let currentLeader of Object.entries(leaders)) {
        let [leaderName,leaderArmies]=currentLeader;
        let totalCount=0;
        for (let currentCount of Object.values(leaderArmies)) {
            totalCount+=currentCount;
        }
        leadersAndTotal[leaderName]=totalCount;
    }
    let entries=Object.entries(leadersAndTotal);
    let sorted=entries.sort((a,b) => b[1]-a[1]);
    for (let currentLeader of sorted) {
        let leaderName=currentLeader[0];
        console.log(`${leaderName}: ${currentLeader[1]}`);
        let entries=Object.entries(leaders[leaderName]).sort((a,b) => b[1]-a[1]);
        for (let [army,count] of entries) {
            console.log(`>>> ${army} - ${count}`);
        }
    }
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])