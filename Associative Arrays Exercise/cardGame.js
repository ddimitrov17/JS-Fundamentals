function cardGame(input) {
    let peopleObject={};
    let powers={2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, J:11, Q:12, K:13, A:14};
    let colors={S:4, H:3, D:2, C:1};
    for (let current of input) {
        let [person,cards]=current.split(`: `);
        let personCardsArray=cards.split(`, `);
        if (person in peopleObject) {
            for (let card of personCardsArray) {
                peopleObject[person].push(card);
            }
        } else {
            peopleObject[person]=personCardsArray;
        }
    }
    for (let [player,cards] of Object.entries(peopleObject)) {
        let sum=0;
        let uniqueCards=new Set(cards);
        for (let card of uniqueCards) {
            let cardPower=card.slice(0,card.length-1);
            let cardColor=card.slice(card.length-1);
            sum+=Number(colors[cardColor])*Number(powers[cardPower]);
        }
        console.log(`${player}: ${sum}`);
    }
}

cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])
// cardGame([

//     'John: 2C, 4H, 9H, AS, QS',
    
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
//     'Thomas: QH, QC, JS, JD, JC',
    
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
//     'Thomas: QH, QC, JS, JD, JC',
    
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
//     'Thomas: QH, QC, JS, JD, JC',
    
//     'John: JD, JD, JD, JD'
    
//     ])