function lastKNumbersSequence(n,k) {
    let array=[1];
    let i=1;
    while (i<n) {
        let current=0;
        let cut=[];
        if (i-k<0) {
            cut=array.slice(0,i);
        } else {
            cut=array.slice(i-k,i); // cutting the last k numbers
        }
            for (a=0;a<cut.length;a++) {
                current+=Number(cut[a]); // Summing the last k numbers
            }
        array.push(current);
        i++;
    }
    console.log(array.join(` `));
}

lastKNumbersSequence(6, 3) // 1 1 2 4 7 13