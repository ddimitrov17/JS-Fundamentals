function loadingBar(num) {
    let bar=[];
    for (i=0;i<num/10;i++) {
        bar[i]=`%`;
    }
    for (p=num/10;p<10;p++) {
        bar[p]=`.`;
    }
    if (num!==100) {
        console.log(`${num}% [${bar.join(``)}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
        console.log(`[${bar.join(``)}]`);
    }
}

loadingBar(10)