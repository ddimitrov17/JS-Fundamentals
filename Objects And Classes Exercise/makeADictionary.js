function makeADictionary(array) {
    let dictionary=[];
    for (i=0;i<array.length;i++) {
        let isReplaced=false;
        let current=JSON.parse(array[i]);
        let term = Object.keys(current)[0];
        for (p=0;p<dictionary.length;p++) {
            let currentKey=Object.keys(dictionary[p]);
            if (currentKey==term) {
                dictionary[p]=current;
                isReplaced=true;
            }
        }
        if (!isReplaced) {
            dictionary.push(current);
        }
    }
    dictionary.sort((a, b) => {
        let keyA = Object.keys(a)[0];
        let keyB = Object.keys(b)[0];
        return keyA.localeCompare(keyB);
    });
    for (let item of dictionary) {
        let term = Object.keys(item)[0];
        let definition = item[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }

}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    `{"Bus":"testttttt"}`
    ])