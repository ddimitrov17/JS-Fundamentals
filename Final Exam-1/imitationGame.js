function imitationGame(input) {
    let encryptedMessage=input.shift();
    let command=input.shift();
    while (command!=`Decode`) {
        let action=command.split(`|`);
        if (action[0]==`Move`) {
            let numberOfLetters=Number(action[1]);
            let toMove=encryptedMessage.slice(0,numberOfLetters);
            encryptedMessage=encryptedMessage.slice(numberOfLetters);
            encryptedMessage+=toMove;
        } else if (action[0]==`Insert`) {
            let idx=Number(action[1]);
            let value=action[2];
            encryptedMessage=encryptedMessage.slice(0,idx) + value + encryptedMessage.slice(idx);
        } else if (action[0]==`ChangeAll`) {
            let substring=action[1];
            let replacement=action[2];
            while (encryptedMessage.includes(substring)) {
                encryptedMessage=encryptedMessage.replace(substring,replacement);
            }
        }
        command=input.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}


imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])
  imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ])