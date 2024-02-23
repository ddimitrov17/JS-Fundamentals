function shootForTheWin(array) {
    let sequence=array.shift().split(` `).map(Number);
    let i=0;
    let shots=0;
    while (array[i]!=`End`) {
        let targetIdx=Number(array[i]);
        if (sequence[targetIdx]!=undefined && sequence[targetIdx]!=-1) {
            change(sequence[targetIdx]);
            sequence[targetIdx]=-1;
            shots++;
        }
        i++;
    }
    console.log(`Shot targets: ${shots} -> ${sequence.join(` `)}`);
    function change(num) {
        for(j=0;j<sequence.length;j++) {
            if (sequence[j]!=-1) {
                if (num>=sequence[j]) {
                    sequence[j]+=num;
                } else {
                    sequence[j]-=num;
                }
            } else {
                continue;
            }
        }
    }
}

shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])