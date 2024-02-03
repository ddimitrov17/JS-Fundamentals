function partyTime(input) {
    let partyIndex = input.indexOf("PARTY")
    let guestList = input.slice(0, partyIndex)
    let arrivals = input.slice(partyIndex + 1)
    for (let guest of arrivals) {
        if (guestList.includes(guest)) {
            let index = guestList.indexOf(guest);
            guestList.splice(index, 1);
        }
    }
    console.log(guestList.length);
    let guestListObject={};
    for (let current of guestList) {
        let position=current[0].charCodeAt();
        if (position>=48 && position<=57) {
            guestListObject[current]=1;
        } else {
            guestListObject[current]=0;
        }
    }
    let entries=Object.entries(guestListObject);
        entries.sort((a,b) => b[1]-a[1]);
    for (let guest of entries) {
        console.log(guest[0])
    }
}

partyTime(['7IK9Yo0h',

'9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])
partyTime(['m8rfQBvl', 'fc1oZCE0','UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ])