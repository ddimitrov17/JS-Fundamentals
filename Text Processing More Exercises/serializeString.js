function serializeString([input]) {
    let obj={};
    for (i=0;i<input.length;i++) {
        if (input[i] in obj) {
            obj[input[i]]+=`/${i}`;
        } else {
            obj[input[i]]=i;
        }
    }
    for (let [currentLetter,occurrences] of Object.entries(obj)) {
        console.log(`${currentLetter}:${occurrences}`);
    }
}

serializeString(["abababa"])
serializeString(["avjavamsdmcalsdm"])