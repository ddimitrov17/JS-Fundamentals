function guineaPig(array) {
    let foodInKG=Number(array[0]);
    let hayInKG=Number(array[1]);
    let coverInKG=Number(array[2]);
    let pigKG=Number(array[3]);
    let days=1;
    while (days<=30) {
        foodInKG-=0.3;
        if(days%2==0) {
            hayInKG=hayInKG-0.05*foodInKG;
        }
        if (days%3==0) {
            coverInKG=coverInKG-(pigKG/3);
        }
        if (foodInKG<0 || hayInKG<0 || coverInKG<0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }
        days++;
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${foodInKG.toFixed(2)}, Hay: ${hayInKG.toFixed(2)}, Cover: ${coverInKG.toFixed(2)}.`);
}

guineaPig(["10", 
"5", 
"5.2", 
"1"])