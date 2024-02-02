function adressBook(input) {
    let adresses={};
    for (let entry of input) {
        let [name,adress]=entry.split(`:`);
        adresses[name]=adress;
    }
    let entries=Object.entries(adresses);
    entries.sort((a,b) => a[0].localeCompare(b[0]));
    for (let entry of entries) {
        console.log(entry.join(` -> `));
    }
}

adressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])