function emojiDetector(input) {
    let str=input.shift();
    let tresholdPattern=/\d/g;
    let totalTreshold=1;
    let coolEmojis=[];
    let matchesCounter=0;
    let numbers=str.matchAll(tresholdPattern);
    for (let num of numbers) {
        totalTreshold*=Number(num[0]);
    }
    let pattern=/(\*{2}|:{2})([A-Z][a-z]{2,})\1/g;
    let matches=str.matchAll(pattern);
    for (let match of matches) {
        let coolness=0;
        matchesCounter++;
        for (let currentChar of match[2]) {
            coolness+=currentChar.charCodeAt();
        }
        if (coolness>totalTreshold) {
            coolEmojis.push(match[0])
        }
    }
    console.log(`Cool threshold: ${totalTreshold}`);
    console.log(`${matchesCounter} emojis found in the text. The cool ones are:`);
    console.log(`${coolEmojis.join(`\n`)}`);
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])