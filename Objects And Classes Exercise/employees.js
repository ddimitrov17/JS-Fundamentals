function employees(array) {
    for (let currentPerson of array) {
        let person={
            personName: currentPerson, 
            personalNum: currentPerson.length
        }
        console.log(`Name: ${person.personName} -- Personal Number: ${person.personalNum}`);
    }
}

employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])