function passwordReset(input) {
    let str=input.shift();
    let oddStr=[];
    let command=input.shift();
    while (command!=`Done`) {
        let tokens=command.split(` `);
        if (tokens[0]==`TakeOdd`) {
            for(i=1;i<str.length;i+=2) {
                oddStr.push(str[i]);
            }
            str=oddStr.join(``);
            oddStr=[];
            console.log(str);
        } else if (tokens[0]==`Cut`) {
            let idx=Number(tokens[1]);
            let length=Number(tokens[2]);
            str=str.slice(0,idx)+str.slice(idx+length);
            console.log(str);
        } else if (tokens[0]==`Substitute`) {
            let substring=tokens[1];
            let replacement=tokens[2];
            if (!str.includes(substring)) {
                console.log(`Nothing to replace!`);
            } else {
                while (str.includes(substring)) {
                    str=str.replace(substring,replacement);
                }
                console.log(str);
            }
        }
        command=input.shift();
    }
    console.log(`Your password is: ${str}`);
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
 "TakeOdd",
 "Cut 15 3",
 "Substitute :: -",
 "Substitute | ^",
 "Done"]))