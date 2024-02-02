function phoneBook(array) {
    let phoneB={};
    for (let row of array) {
        let [name,phone]=row.split(` `);
        phoneB[name]=phone;
    }
    for (let [name,phone] of Object.entries(phoneB)) {
        console.log(`${name} -> ${phone}`);
    }
}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])