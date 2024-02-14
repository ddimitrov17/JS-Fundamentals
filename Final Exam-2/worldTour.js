function worldTour(input) {
    let destinations=input.shift();
    let command=input.shift();
    while (command!=`Travel`) {
        let tokens=command.split(`:`);
        if (tokens[0]==`Add Stop`) {
            let idx=Number(tokens[1]);
            let newDestination=tokens[2];
            if (idx>=0 && idx<destinations.length) {
                let left = destinations.slice(0, idx);
                let right = destinations.slice(idx);
                destinations = left + newDestination + right;
            }
        } else if (tokens[0]==`Remove Stop`) {
            let startingIndex=Number(tokens[1]);
            let endIndex=Number(tokens[2]);
            if (startingIndex>=0 && startingIndex<destinations.length && endIndex>=0 && endIndex<destinations.length && startingIndex <= endIndex)
            destinations=destinations.slice(0,startingIndex)+destinations.slice(endIndex+1);
        } else if (tokens[0]==`Switch`) {
            let old=tokens[1];
            let toReplaceWith=tokens[2];
            if (destinations.includes(old)) {
                destinations=destinations.replace(old,toReplaceWith);
            }
        }
    command=input.shift();
    console.log(destinations);
    }
    console.log(`Ready for world tour! Planned stops: ${destinations}`);
}

// worldTour(["Hawai::Cyprys-Greece",
// "Add Stop:7:Rome",
// "Remove Stop:11:16",
// "Switch:Hawai:Bulgaria",
// "Travel"])
worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]))