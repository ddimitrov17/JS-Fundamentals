function minerTask(input) {
    let items={};
    for (let i=0;i<input.length;i+=2) {
        if (items.hasOwnProperty(input[i])) {
            items[input[i]]+=Number(input[i+1]);
        } else {
            items[input[i]]=Number(input[i+1]);
        }
    }
    for (let [item,qty] of Object.entries(items)) {
        console.log(`${item} -> ${qty}`);
    }
}

minerTask([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])