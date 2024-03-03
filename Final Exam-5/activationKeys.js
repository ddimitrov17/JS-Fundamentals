function activationKeys(input) {
    let activationKey=input.shift();
    let command=input.shift();
    while(command!=`Generate`) {
        let tokens=command.split(`>>>`);
        if (tokens[0]==`Contains`) {
            let substring=tokens[1];
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (tokens[0]==`Flip`) {
            let upperOrLower=tokens[1];
            let startIdx=Number(tokens[2]);
            let endIdx=Number(tokens[3]);
            let toChange=activationKey.slice(startIdx,endIdx);
            if (upperOrLower==`Upper`) {
                toChange=toChange.toUpperCase();
            } else {
                toChange=toChange.toLowerCase();
            }
            activationKey=activationKey.slice(0,startIdx)+toChange+activationKey.slice(endIdx);
            console.log(activationKey);
        } else if (tokens[0]==`Slice`) {
            let startIdx=Number(tokens[1]);
            let endIdx=Number(tokens[2]);
            activationKey=activationKey.slice(0,startIdx)+activationKey.slice(endIdx);
            console.log(activationKey);
        }
        command=input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])