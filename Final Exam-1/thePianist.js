function thePianist(input) {
    let piecesCount=Number(input.shift());
    let pieces={};
    for (i=0;i<piecesCount;i++) {
        let [piece,composer,key]=input[i].split(`|`);
            pieces[piece]={composer,key};
    }
    input.splice(0,piecesCount);
    let command=input.shift();
    while (command!=`Stop`) {
        let tokens=command.split(`|`);
        if (tokens[0]==`Add`) {
            let piece=tokens[1];
            let composer=tokens[2];
            let key=tokens[3];
            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (tokens[0]==`Remove`) {
            let piece=tokens[1];
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (tokens[0]==`ChangeKey`) {
            let piece=tokens[1];
            let key=tokens[2];
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = key;
                console.log(`Changed the key of ${piece} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        command=input.shift();
    }
    for (let piece in pieces) {
        console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop' ])