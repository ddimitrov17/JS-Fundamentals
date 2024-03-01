function secretChat(input) {
    let str=input.shift();
    let command=input.shift();
    while(command!=`Reveal`) {
        let tokens=command.split(`:|:`);
        if (tokens[0]==`InsertSpace`) {
            let idx=Number(tokens[1]);
            str=str.slice(0,idx) + ` ` + str.slice(idx);
            console.log(str);
        } else if (tokens[0]==`Reverse`) {
            let substring=tokens[1];
            if (str.includes(substring)) {
                let idx=str.indexOf(substring);
                let reversedSubstring = substring.split('').reverse().join('');
                str=str.slice(0,idx) + str.slice(idx+substring.length) +reversedSubstring;
                console.log(str);
            } else {
                console.log(`error`);
            }
        } else if (tokens[0]==`ChangeAll`) {
            let from=tokens[1];
            let toChange=tokens[2];
            str=str.split(from).join(toChange);
            console.log(str);
        }
        command=input.shift();
    }
    console.log(`You have a new text message: ${str}`);
}

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ])
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])