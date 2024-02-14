function destinationMapper(str) {
    let pattern=/([=\/])([A-Z][a-zA-Z]{2,})\1/g;
    let matches=str.matchAll(pattern);
    let totalPoints=0;
    let destinations=[];
    for (let match of matches) {
        totalPoints+=Number(match[2].length);
        destinations.push(match[2]);
    }
    console.log(`Destinations: ${destinations.join(`, `)}`);
    console.log(`Travel Points: ${totalPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")