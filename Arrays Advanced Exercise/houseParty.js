function houseParty(array) {
    let listGoing=[];
    for (i=0;i<array.length;i++) {
        let sentence=array[i].split(` `);
        let name=sentence[0];
        if (sentence[2]!==`not`) {
            if (!listGoing.includes(name)) {
                listGoing.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if(!listGoing.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let idx=listGoing.indexOf(name);
                listGoing.splice(idx,1);
            }
        }
    }
    console.log(listGoing.join(`\n`));
}

houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])